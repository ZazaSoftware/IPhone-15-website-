import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://e207fa3ef0dc6ff170f9bcfdda0be34a@o4507800204083200.ingest.us.sentry.io/4507800211292160",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),

    Sentry.replayIntegration( {
      maskAllText: false,
      blockAllMedia: false,
    
    }),
  ],
  
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});


 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
