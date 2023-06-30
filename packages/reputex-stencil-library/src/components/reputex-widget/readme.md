# reputex-widget



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type      | Default     |
| -------------- | ---------------- | ----------- | --------- | ----------- |
| `apiAccessKey` | `api-access-key` |             | `string`  | `undefined` |
| `apiSecretKey` | `api-secret-key` |             | `string`  | `undefined` |
| `mode`         | `mode`           |             | `boolean` | `undefined` |
| `userAddress`  | `user-address`   |             | `string`  | `undefined` |
| `visibility`   | `visibility`     |             | `boolean` | `undefined` |


## Dependencies

### Depends on

- [score-loaded](../score-loaded)
- [pending-state](../pending-state)

### Graph
```mermaid
graph TD;
  reputex-widget --> score-loaded
  reputex-widget --> pending-state
  score-loaded --> asset-reputex-logo
  score-loaded --> asset-maximize
  score-loaded --> asset-line
  pending-state --> asset-circle-right
  pending-state --> asset-rectangle-top
  pending-state --> asset-line
  pending-state --> asset-rectangle-left
  pending-state --> asset-rectangle-middle
  pending-state --> asset-rectangle-right
  style reputex-widget fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*