# score-loaded



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type      | Default     |
| -------------- | ---------------- | ----------- | --------- | ----------- |
| `isDid`        | `is-did`         |             | `boolean` | `undefined` |
| `lastUpdated`  | `last-updated`   |             | `string`  | `undefined` |
| `mode`         | `mode`           |             | `boolean` | `undefined` |
| `reputeXScore` | `repute-x-score` |             | `number`  | `undefined` |
| `userAddress`  | `user-address`   |             | `string`  | `undefined` |


## Dependencies

### Used by

 - [reputex-did-widget](../reputex-did-widget)
 - [reputex-widget](../reputex-widget)

### Depends on

- [asset-reputex-logo](../asset-reputex-logo)
- [asset-maximize](../asset-maximize)
- [asset-line](../asset-line)

### Graph
```mermaid
graph TD;
  score-loaded --> asset-reputex-logo
  score-loaded --> asset-maximize
  score-loaded --> asset-line
  reputex-did-widget --> score-loaded
  reputex-widget --> score-loaded
  style score-loaded fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
