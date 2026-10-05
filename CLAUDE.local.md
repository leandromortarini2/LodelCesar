# Nova — Carga de Comprobantes

Archivo de contexto persistente para Claude Code. Se carga automáticamente al inicio de cada sesión.

---

## Stack y arquitectura

- **Frontend:** React + React Hook Form (`useFormContext`) + TanStack Query + Zustand
- **Stores globales:** `useAuthStore`, `useConfigStore`
- **Patrón:** lógica concentrada en hooks, componentes sin estado propio
- **Comunicación entre componentes:** `forwardRef` + `useImperativeHandle`
- **Fetching:** TanStack Query
- **Backend:** PHP (archivos `.php` por servicio)

---

## Convenciones obligatorias

- Archivos **siempre completos**, nunca snippets parciales
- Lógica en **hooks**, no en componentes
- **Sin valores hardcodeados** — todo viene del backend
- Confirmar con **Christian (backend)** antes de asumir cualquier campo o valor del payload
- `limpiar()` en `useSeccionConceptos` retorna `number[]` con los IDs de las filas creadas
- El botón `-` con una sola fila **limpia los valores** en lugar de eliminar la fila

---

## Hooks principales

| Hook                       | Responsabilidad                                                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useCargaComprobantesView` | Hook raíz: form, `buildPayload`, validaciones, llamadas a `grabarComprobante`                                                                                                         |
| `useDetalleConceptos`      | Cinco secciones de conceptos. Expone `handleSearchConceptos`, `handleSearchPercepcion`, `handleSearchRetencion`, `handleSearchIva`, `handleCalcularIva`, `getDetalle`, `getAlicuotas` |
| `useSeccionConceptos`      | Compartido por todas las secciones. Maneja filas dinámicas, refs imperativos, totales y limpieza                                                                                      |
| `useVencimientos`          | Cuotas de pago del comprobante                                                                                                                                                        |

---

## Componentes principales

| Componente                 | Notas                                                                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DetalleConceptos`         | Agrupa las cinco secciones. Expone `getDetalle()` y `getAlicuotas()` via ref                                                                               |
| `NetoGravado`              | `FilaConcepto` + `FilaNetoCampos` (alícuota + centro de costos). Dispara `onCalcularIva` al cambiar importe o alícuota                                     |
| `NoGravado`                | `FilaConcepto` + `FilaCentroCostos`                                                                                                                        |
| `IVA`                      | Se llena automáticamente via `setFilasIva()` o manualmente. Expone `setFilasIva` en su ref                                                                 |
| `Percepcion` / `Retencion` | `FilaConcepto` con búsqueda en sus propias tablas                                                                                                          |
| `FilaConcepto`             | Fila reutilizable con `SearchBarTable` + importe. Expone `setDatos`, `getDatos`, `tieneDatos`. Muestra error inline debajo de la fila sin romper el layout |
| `SearchBarTable`           | Buscador con modal. Expone `focusInput` y `setValor`. Prop `showInlineError` (default `true`)                                                              |
| `VencimientosComponent`    | Modal de cuotas. Recibe `vencimientosIniciales` para pre-poblar al reabrir                                                                                 |
| `HeaderComponent`          | Botones de acción + ícono de info con modal de atajos de teclado                                                                                           |

---

## Servicios

| Servicio            | Archivo                 | Descripción                                                                                                            |
| ------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `grabarComprobante` | `grabarMovimientos.php` | Graba el comprobante completo en una sola transacción. Construye tablas dinámicamente según qué secciones tienen datos |
| `calcularIva`       | `calcularIva.php`       | Recibe `[{ idcodali, alic, importe }]` y devuelve IVA agrupado por alícuota                                            |
| `obtenerDatosTabla` | —                       | Consulta genérica para traer datos de cualquier tabla                                                                  |

---

## Valores confirmados del backend

```js
idtipocnc: "GR"; // Neto Gravado
idtipocnc: "NG"; // No Gravado
idlibcom: "calcularid"; // en todas las tablas hijas
fechai: new Date().toISOString(); // en vencimientosprv
idtipocre: 0; // en vencimientosprv
credito: 0; // en vencimientosprv
f_alta: "ahora"; // en compras (el backend lo interpreta)
```

**Tablas de base de datos:** `concegas`, `alicuotas`, `cencostos`, `percepcion`, `retencion`, `proveedor` (sin "es")

---

## Tablas del comprobante

| Tabla             | Clave primaria |
| ----------------- | -------------- |
| `compras`         | `idlibcom`     |
| `comprascnc`      | `idlibcom`     |
| `comprasiva`      | `idlibcom`     |
| `comprasper`      | `idlibcom`     |
| `comprasret`      | `idlibcom`     |
| `vencimientosprv` | `idvencim`     |

---

## Atajos de teclado

| Atajo                  | Acción                                    |
| ---------------------- | ----------------------------------------- |
| `Ctrl+S`               | Guardar                                   |
| `Ctrl+Enter`           | Guardar y nuevo                           |
| `Ctrl+Shift+Backspace` | Descartar                                 |
| `Alt+↓ / Alt+↑`        | Agregar / eliminar fila en sección activa |
| `Alt+C`                | Limpiar proveedor                         |
