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
            "routes": [],
            "targets": {}
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaWZlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5pZmVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3RCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLFNBQVMsRUFBRTtRQUNULFVBQVUsRUFBRSxPQUFPO1FBQ25CLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsTUFBTSxFQUFFLGFBQWE7UUFDckIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixNQUFNLEVBQUUsc0JBQXNCO1FBQzlCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLGFBQWEsRUFBRSxvQkFBb0I7UUFDbkMsb0JBQW9CLEVBQUU7WUFDcEIsU0FBUyxFQUFFLG9CQUFvQjtTQUNoQztRQUNELEtBQUssRUFBRSxJQUFJO1FBQ1gsZ0JBQWdCLEVBQUU7WUFDaEIsSUFBSSxFQUFFLHlCQUF5QjtZQUMvQixTQUFTLEVBQUUsT0FBTztTQUNuQjtLQUNGO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsVUFBVSxFQUFFLE9BQU87UUFDbkIsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixXQUFXLEVBQUUsZUFBZTtLQUM3QjtJQUNELFFBQVEsRUFBRTtRQUNSLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFlBQVksRUFBRSxLQUFLO1FBQ25CLE9BQU8sRUFBRTtZQUNQLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsRUFBRTtZQUNYLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtTQUNmO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixTQUFTO1lBQ1QsaUJBQWlCO1NBQ2xCO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxVQUFVLEVBQUUsT0FBTztRQUNuQixVQUFVLEVBQUU7WUFDVixVQUFVLEVBQUUsMEJBQTBCO1lBQ3RDLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFLEtBQUs7U0FDWjtRQUNELGNBQWMsRUFBRTtZQUNkLGVBQWUsRUFBRSx5QkFBeUI7WUFDMUMsTUFBTSxFQUFFO2dCQUNOLGFBQWEsRUFBRTtvQkFDYixZQUFZLEVBQUUsUUFBUTtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVksRUFBRSxRQUFRO2lCQUN2QjthQUNGO1NBQ0Y7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixTQUFTLEVBQUUsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJO1NBQ2I7UUFDRCxRQUFRLEVBQUU7WUFDUixNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLHFDQUFxQztnQkFDN0MsVUFBVSxFQUFFO29CQUNWLFlBQVksRUFBRSwyQkFBMkI7aUJBQzFDO2FBQ0Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUUsc0JBQXNCO2dCQUNyQyxVQUFVLEVBQUUsS0FBSztnQkFDakIsVUFBVSxFQUFFLHNCQUFzQjtnQkFDbEMsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLG9CQUFvQixFQUFFLFNBQVM7Z0JBQy9CLFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUU7d0JBQ1IsUUFBUTt3QkFDUixVQUFVO3FCQUNYO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxJQUFJO2FBQ2Q7WUFDRCxRQUFRLEVBQUUsRUFDVDtZQUNELFNBQVMsRUFBRSxFQUNWO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFuaWZlc3QgPSB7XHJcbiAgXCJfdmVyc2lvblwiOiBcIjEuMy4wXCIsXHJcbiAgXCJzYXAuYXBwXCI6IHtcclxuICAgIFwiX3ZlcnNpb25cIjogXCIxLjMuMFwiLFxyXG4gICAgXCJpZFwiOiBcInRlc3QudHlwZXNjcmlwdFwiLFxyXG4gICAgXCJ0eXBlXCI6IFwiYXBwbGljYXRpb25cIixcclxuICAgIFwicmVzb3VyY2VzXCI6IFwicmVzb3VyY2VzLmpzb25cIixcclxuICAgIFwiaTE4blwiOiBcImkxOG4vaTE4bi5wcm9wZXJ0aWVzXCIsXHJcbiAgICBcInRpdGxlXCI6IFwie3thcHBUaXRsZX19XCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwie3thcHBEZXNjcmlwdGlvbn19XCIsXHJcbiAgICBcImFwcGxpY2F0aW9uVmVyc2lvblwiOiB7XHJcbiAgICAgIFwidmVyc2lvblwiOiBcIiR7cHJvamVjdC52ZXJzaW9ufVwiXHJcbiAgICB9LFxyXG4gICAgXCJhY2hcIjogXCJYWFwiLFxyXG4gICAgXCJzb3VyY2VUZW1wbGF0ZVwiOiB7XHJcbiAgICAgIFwiaWRcIjogXCJjdXN0ZGV2LnNhcHVpNS5maW9yaWFwcFwiLFxyXG4gICAgICBcInZlcnNpb25cIjogXCIxLjAuMFwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBcInNhcC5maW9yaVwiOiB7XHJcbiAgICBcIl92ZXJzaW9uXCI6IFwiMS4xLjBcIixcclxuICAgIFwicmVnaXN0cmF0aW9uSWRzXCI6IFtdLFxyXG4gICAgXCJhcmNoZVR5cGVcIjogXCJ0cmFuc2FjdGlvbmFsXCJcclxuICB9LFxyXG4gIFwic2FwLnVpXCI6IHtcclxuICAgIFwiX3ZlcnNpb25cIjogXCIxLjMuMFwiLFxyXG4gICAgXCJ0ZWNobm9sb2d5XCI6IFwiVUk1XCIsXHJcbiAgICBcImljb25zXCI6IHtcclxuICAgICAgXCJpY29uXCI6IFwic2FwLWljb246Ly9kZXRhaWwtdmlld1wiLFxyXG4gICAgICBcImZhdkljb25cIjogXCJcIixcclxuICAgICAgXCJwaG9uZVwiOiBcIlwiLFxyXG4gICAgICBcInBob25lQDJcIjogXCJcIixcclxuICAgICAgXCJ0YWJsZXRcIjogXCJcIixcclxuICAgICAgXCJ0YWJsZXRAMlwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJkZXZpY2VUeXBlc1wiOiB7XHJcbiAgICAgIFwiZGVza3RvcFwiOiB0cnVlLFxyXG4gICAgICBcInRhYmxldFwiOiB0cnVlLFxyXG4gICAgICBcInBob25lXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBcInN1cHBvcnRlZFRoZW1lc1wiOiBbXHJcbiAgICAgIFwic2FwX2hjYlwiLFxyXG4gICAgICBcInNhcF9ibHVlY3J5c3RhbFwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBcInNhcC51aTVcIjoge1xyXG4gICAgXCJfdmVyc2lvblwiOiBcIjEuMi4wXCIsXHJcbiAgICBcInJvb3RWaWV3XCI6IHtcclxuICAgICAgXCJ2aWV3TmFtZVwiOiBcInRlc3QudHlwZXNjcmlwdC52aWV3LkFwcFwiLFxyXG4gICAgICBcInR5cGVcIjogXCJKU1wiLFxyXG4gICAgICBcImlkXCI6IFwiYXBwXCJcclxuICAgIH0sXHJcbiAgICBcImRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICAgIFwibWluVUk1VmVyc2lvblwiOiBcIiR7c2FwLnVpNS5kaXN0LnZlcnNpb259XCIsXHJcbiAgICAgIFwibGlic1wiOiB7XHJcbiAgICAgICAgXCJzYXAudWkuY29yZVwiOiB7XHJcbiAgICAgICAgICBcIm1pblZlcnNpb25cIjogXCIxLjM2LjBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzYXAubVwiOiB7XHJcbiAgICAgICAgICBcIm1pblZlcnNpb25cIjogXCIxLjM2LjBcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiY29udGVudERlbnNpdGllc1wiOiB7XHJcbiAgICAgIFwiY29tcGFjdFwiOiB0cnVlLFxyXG4gICAgICBcImNvenlcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFwibW9kZWxzXCI6IHtcclxuICAgICAgXCJpMThuXCI6IHtcclxuICAgICAgICBcInR5cGVcIjogXCJzYXAudWkubW9kZWwucmVzb3VyY2UuUmVzb3VyY2VNb2RlbFwiLFxyXG4gICAgICAgIFwic2V0dGluZ3NcIjoge1xyXG4gICAgICAgICAgXCJidW5kbGVOYW1lXCI6IFwidGVzdC50eXBlc2NyaXB0LmkxOG4uaTE4blwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJyb3V0aW5nXCI6IHtcclxuICAgICAgXCJjb25maWdcIjoge1xyXG4gICAgICAgIFwicm91dGVyQ2xhc3NcIjogXCJzYXAubS5yb3V0aW5nLlJvdXRlclwiLFxyXG4gICAgICAgIFwidmlld1R5cGVcIjogXCJYTUxcIixcclxuICAgICAgICBcInZpZXdQYXRoXCI6IFwidGVzdC50eXBlc2NyaXB0LnZpZXdcIixcclxuICAgICAgICBcImNvbnRyb2xJZFwiOiBcImlkQXBwQ29udHJvbFwiLFxyXG4gICAgICAgIFwiY29udHJvbEFnZ3JlZ2F0aW9uXCI6IFwiY29udGVudFwiLFxyXG4gICAgICAgIFwiYnlwYXNzZWRcIjoge1xyXG4gICAgICAgICAgXCJ0YXJnZXRcIjogW1xyXG4gICAgICAgICAgICBcIm1hc3RlclwiLFxyXG4gICAgICAgICAgICBcIm5vdEZvdW5kXCJcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYXN5bmNcIjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBcInJvdXRlc1wiOiBbXHJcbiAgICAgIF0sXHJcbiAgICAgIFwidGFyZ2V0c1wiOiB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07Il19