export const manifest = {
  "_version": "1.3.0",
  "sap.app": {
    "_version": "1.3.0",
    "id": "test.typescript",
    "type": "application",
    "resources": "resources.json",
    "i18n": "i18n/i18n.properties",
    "title": "{{appTitle}}",
    "description": "{{appDescription}}",
    "applicationVersion": {
      "version": "${project.version}"
    },
    "ach": "XX",
    "sourceTemplate": {
      "id": "custdev.sapui5.fioriapp",
      "version": "1.0.0"
    }
  },
  "sap.fiori": {
    "_version": "1.1.0",
    "registrationIds": [],
    "archeType": "transactional"
  },
  "sap.ui": {
    "_version": "1.3.0",
    "technology": "UI5",
    "icons": {
      "icon": "sap-icon://detail-view",
      "favIcon": "",
      "phone": "",
      "phone@2": "",
      "tablet": "",
      "tablet@2": ""
    },
    "deviceTypes": {
      "desktop": true,
      "tablet": true,
      "phone": true
    },
    "supportedThemes": [
      "sap_hcb",
      "sap_bluecrystal"
    ]
  },
  "sap.ui5": {
    "_version": "1.2.0",
    "rootView": {
      "viewName": "test.typescript.view.App",
      "type": "JS",
      "id": "app"
    },
    "dependencies": {
      "minUI5Version": "${sap.ui5.dist.version}",
      "libs": {
        "sap.ui.core": {
          "minVersion": "1.36.0"
        },
        "sap.m": {
          "minVersion": "1.36.0"
        }
      }
    },
    "contentDensities": {
      "compact": true,
      "cozy": true
    },
    "models": {
      "i18n": {
        "type": "sap.ui.model.resource.ResourceModel",
        "settings": {
          "bundleName": "test.typescript.i18n.i18n"
        }
      }
    },
    "routing": {
      "config": {
        "routerClass": "sap.m.routing.Router",
        "viewType": "XML",
        "viewPath": "test.typescript.view",
        "controlId": "idAppControl",
        "controlAggregation": "content",
        "bypassed": {
          "target": [
            "master",
            "notFound"
          ]
        },
        "async": true
      },
      "routes": [
      ],
      "targets": {
      }
    }
  }
};