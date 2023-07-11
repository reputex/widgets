
# ReputeX Vue Widget
## Features
​
-   Simple plug-and-play use.
-   Easiest way to Display ReputeX Scores to your users.
-   Fully  **Typescript**  ready out-of-the box.
​
​
## 🚀 Quick start
​
If you're new to ReputeX, check the [quickstart guide in the official docs](https://docs.reputex.io/) on how to get started.
​
## Reputex Vue Widget Installation
​
### 1. Install ReputeX Vue Widget
- Open your terminal or command prompt.
- Navigate to your project directory.
- Install ReputeX React Widget:
    -   Install the package via npm:
	     `npm i @reputex/vue-widget`
	 - or yarn:
		 `yarn add @reputex/vue-widget`
​
### 2. Import and Use the widget
​
After your dependency is added, you simply need to import and initialize ReputeXWidget.
​
 - In your Vue component file (e.g., `main.js` or `main.ts`), import the ReputeXWidget component from the package:
    
    ```
    import { ComponentLibrary } from  "@reputex/vue-widget";
    ```
- Create a Vue app instance and use the ReputeXWidget component as a plugin:
   ```
        import { createApp } from "vue"; 
        import App from "./App.vue";
        createApp(App).use(ComponentLibrary).mount("#app");
	```
- To consume the ReputeX widget in your Vue.js application, you can use the following code:
   	```
        <reputex-widget 
	        visibility 
	        user-address="user-address" 
	        api-access-key="your-api-acess-key" 
	        api-secret-key="your-api secret-key" 
	        mode>
        </reputex-widget>
    ```
​
## Reputex Nuxt Widget Installation
### 1. Install ReputeX Vue Widget
​
-  Open your terminal or command prompt.
-  Navigate to your project directory.
-  Install ReputeX React Widget:
    -   Install the package via `npm`:
	     `npm i @reputex/vue-widget`
	 - or yarn:
		 `yarn add @reputex/vue-widget`
​
### 2. Import and Use the widget
​
After your dependency is added, you simply need to import and initialize ReputeXWidget.
​
 - Create a new file called `reputex-plugin.js` inside the `plugins` directory of your Nuxt.js project. In that file, add the following code:
    ```
        import Vue from 'vue' 
        import { ComponentLibrary } from "@reputex/vue-widget"
        Vue.use(ComponentLibrary)
    ```
​
​
 - In your Nuxt.js application, open the `nuxt.config.js` file and add the provided code to the plugins section of the file.
 	```
  	plugins: [{ src: '~/plugins/reputex-plugin.js', mode: 'client' }]
   	```
        
 - To consume the ReputeX widget in your Nuxt.js application, you can use the following code:
   ```
        <reputex-widget 
	        visibility 
	        user-address="user-address" 
	        api-access-key="your-api-acess-key" 
	        api-secret-key="your-api secret-key" 
	        mode>
        </reputex-widget>
   ```        
​
## Integration Instructions for ReputeX Widget
1.  Replace 'your-apiAcessKey', 'your-apiSecretKey', and 'user-address' with your own values.
2.  You can include the `mode` property to change the theme of the widget. By default, it is set to true for dark mode.
3.  To change the visibility of the widget, you can include the `visibility` property. By default, it is set to `true`.
4.  The widget will now be displayed on your webpage.
​
That's it! You can now use the ReputeX widget in your project. If you have any queries, please reach out to us at [contact@reputex.io](mailto:contact@reputex.io).
​
## Common Issues
​
In some cases, when using Vite for your application, you may encounter a common issue related to the "504 (Outdated Optimize Dep)" error. To address this, you can modify the `vite.config.js` file by adding the following configuration:
1.  Import the `defineConfig` function from "vite":
   	```
		import { defineConfig } from "vite";
    ```
​
2.  Update the default export to use `defineConfig` and include the `optimizeDeps` property:​
```
		export default defineConfig({ 
		// ...
		optimizeDeps: {
		exclude: ['@reputex/vue-widget']
		}
		});
  ```
   
