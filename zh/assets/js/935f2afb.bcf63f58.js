"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mySidebar":[{"type":"link","label":"K3s - \u8f7b\u91cf\u7ea7 Kubernetes","href":"/zh/","docId":"introduction"},{"type":"link","label":"\u67b6\u6784","href":"/zh/architecture/","docId":"architecture/architecture"},{"type":"link","label":"\u5feb\u901f\u5165\u95e8\u6307\u5357","href":"/zh/quick-start/","docId":"quick-start/quick-start"},{"type":"category","label":"\u5b89\u88c5","items":[{"type":"link","label":"Requirements","href":"/zh/installation/requirements","docId":"installation/requirements"},{"type":"link","label":"Configuration Options","href":"/zh/installation/configuration","docId":"installation/configuration"},{"type":"link","label":"Network Options","href":"/zh/installation/network-options","docId":"installation/network-options"},{"type":"link","label":"Private Registry Configuration","href":"/zh/installation/private-registry","docId":"installation/private-registry"},{"type":"link","label":"Air-Gap Install","href":"/zh/installation/airgap","docId":"installation/airgap"},{"type":"link","label":"Managing Server Roles","href":"/zh/installation/server-roles","docId":"installation/server-roles"},{"type":"link","label":"Managing Packaged Components","href":"/zh/installation/packaged-components","docId":"installation/packaged-components"},{"type":"link","label":"Kubernetes Dashboard","href":"/zh/installation/kube-dashboard","docId":"installation/kube-dashboard"},{"type":"link","label":"Uninstalling K3s","href":"/zh/installation/uninstall","docId":"installation/uninstall"}],"collapsed":true,"collapsible":true,"href":"/zh/installation/"},{"type":"category","label":"Cluster Datastore","items":[{"type":"link","label":"Backup and Restore","href":"/zh/datastore/backup-restore","docId":"datastore/backup-restore"},{"type":"link","label":"High Availability Embedded etcd","href":"/zh/datastore/ha-embedded","docId":"datastore/ha-embedded"},{"type":"link","label":"High Availability External DB","href":"/zh/datastore/ha","docId":"datastore/ha"}],"collapsed":true,"collapsible":true,"href":"/zh/datastore/"},{"type":"link","label":"\u96c6\u7fa4\u8bbf\u95ee","href":"/zh/cluster-access/","docId":"cluster-access/cluster-access"},{"type":"category","label":"\u5347\u7ea7","items":[{"type":"link","label":"\u505c\u6b62 K3s","href":"/zh/upgrades/killall","docId":"upgrades/killall"},{"type":"link","label":"\u624b\u52a8\u5347\u7ea7","href":"/zh/upgrades/manual","docId":"upgrades/manual"},{"type":"link","label":"\u81ea\u52a8\u5347\u7ea7","href":"/zh/upgrades/automated","docId":"upgrades/automated"}],"collapsed":true,"collapsible":true,"href":"/zh/upgrades/"},{"type":"link","label":"\u5377\u548c\u5b58\u50a8","href":"/zh/storage/","docId":"storage/storage"},{"type":"link","label":"\u7f51\u7edc","href":"/zh/networking/","docId":"networking/networking"},{"type":"link","label":"Helm","href":"/zh/helm/","docId":"helm/helm"},{"type":"link","label":"Advanced Options / Configuration","href":"/zh/advanced/","docId":"advanced/advanced"},{"type":"link","label":"\u5e38\u89c1\u95ee\u9898","href":"/zh/faq/","docId":"faq/faq"},{"type":"category","label":"CLI Tools","items":[{"type":"link","label":"server","href":"/zh/cli/server","docId":"cli/server"},{"type":"link","label":"agent","href":"/zh/cli/agent","docId":"cli/agent"},{"type":"link","label":"certificate","href":"/zh/cli/certificate","docId":"cli/certificate"},{"type":"link","label":"etcd-snapshot","href":"/zh/cli/etcd-snapshot","docId":"cli/etcd-snapshot"},{"type":"link","label":"secrets-encrypt","href":"/zh/cli/secrets-encrypt","docId":"cli/secrets-encrypt"},{"type":"link","label":"token","href":"/zh/cli/token","docId":"cli/token"}],"collapsed":true,"collapsible":true,"href":"/zh/cli/"},{"type":"category","label":"\u53c2\u8003","items":[{"type":"link","label":"\u73af\u5883\u53d8\u91cf","href":"/zh/reference/env-variables","docId":"reference/env-variables"},{"type":"link","label":"K3s \u8d44\u6e90\u5206\u6790","href":"/zh/reference/resource-profiling","docId":"reference/resource-profiling"}],"collapsed":true,"collapsible":true,"href":"/zh/reference/"},{"type":"link","label":"\u5df2\u77e5\u95ee\u9898","href":"/zh/known-issues/","docId":"known-issues/known-issues"},{"type":"category","label":"\u5b89\u5168","items":[{"type":"link","label":"Secret \u52a0\u5bc6","href":"/zh/security/secrets-encryption","docId":"security/secrets-encryption"},{"type":"link","label":"CIS Hardening Guide","href":"/zh/security/hardening-guide","docId":"security/hardening-guide"},{"type":"link","label":"CIS Self Assessment Guide","href":"/zh/security/self-assessment","docId":"security/self-assessment"}],"collapsed":true,"collapsible":true,"href":"/zh/security/"}]},"docs":{"advanced/advanced":{"id":"advanced/advanced","title":"Advanced Options / Configuration","description":"This section contains advanced information describing the different ways you can run and manage K3s, as well as steps necessary to prepare the host OS for K3s use.","sidebar":"mySidebar"},"architecture/architecture":{"id":"architecture/architecture","title":"\u67b6\u6784","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u9ad8\u53ef\u7528\uff08HA\uff09K3s \u670d\u52a1\u5668\u96c6\u7fa4\u7684\u67b6\u6784\uff0c\u4ee5\u53ca K3s \u4e0e\u5355\u8282\u70b9\u670d\u52a1\u5668\u96c6\u7fa4\u7684\u533a\u522b\u3002","sidebar":"mySidebar"},"backup-restore/backup-restore":{"id":"backup-restore/backup-restore","title":"\u5907\u4efd\u548c\u6062\u590d","description":"K3s \u7684\u5907\u4efd\u548c\u6062\u590d\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u3002"},"cli/agent":{"id":"cli/agent","title":"agent","description":"In this section, you\'ll learn how to configure the K3s agent.","sidebar":"mySidebar"},"cli/certificate":{"id":"cli/certificate","title":"certificate","description":"Client and Server Certificates","sidebar":"mySidebar"},"cli/cli":{"id":"cli/cli","title":"CLI Tools","description":"The K3s binary contains a number of additional tools the help you manage your cluster.","sidebar":"mySidebar"},"cli/etcd-snapshot":{"id":"cli/etcd-snapshot","title":"etcd-snapshot","description":"Available as of v1.19.1+k3s1","sidebar":"mySidebar"},"cli/secrets-encrypt":{"id":"cli/secrets-encrypt","title":"secrets-encrypt","description":"K3s supports enabling secrets encryption at rest. For more information, see Secrets Encryption.","sidebar":"mySidebar"},"cli/server":{"id":"cli/server","title":"server","description":"In this section, you\'ll learn how to configure the K3s server.","sidebar":"mySidebar"},"cli/token":{"id":"cli/token","title":"token","description":"K3s uses tokens to secure the node join process. Tokens authenticate the cluster to the joining node, and the node to the cluster.","sidebar":"mySidebar"},"cluster-access/cluster-access":{"id":"cluster-access/cluster-access","title":"\u96c6\u7fa4\u8bbf\u95ee","description":"/etc/rancher/k3s/k3s.yaml \u4e2d\u5b58\u50a8\u7684 kubeconfig \u6587\u4ef6\u7528\u4e8e\u914d\u7f6e\u5bf9 Kubernetes \u96c6\u7fa4\u7684\u8bbf\u95ee\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e0a\u6e38\u7684 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff08\u5982 kubectl \u6216 helm)\uff0c\u4f60\u9700\u8981\u7528\u6b63\u786e\u7684 kubeconfig \u8def\u5f84\u914d\u7f6e\u5b83\u4eec\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5bfc\u51fa KUBECONFIG \u73af\u5883\u53d8\u91cf\u6216\u8c03\u7528 --kubeconfig \u547d\u4ee4\u884c\u6807\u5fd7\u6765\u5b8c\u6210\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002","sidebar":"mySidebar"},"datastore/backup-restore":{"id":"datastore/backup-restore","title":"Backup and Restore","description":"The way K3s is backed up and restored depends on which type of datastore is used.","sidebar":"mySidebar"},"datastore/datastore":{"id":"datastore/datastore","title":"Cluster Datastore","description":"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available datastore options allow you to select a datastore that best fits your use case. For example:","sidebar":"mySidebar"},"datastore/ha":{"id":"datastore/ha","title":"High Availability External DB","description":"Note: Official support for installing Rancher on a Kubernetes cluster was introduced in our v1.0.0 release.","sidebar":"mySidebar"},"datastore/ha-embedded":{"id":"datastore/ha-embedded","title":"High Availability Embedded etcd","description":"Full support as of v1.19.5+k3s1","sidebar":"mySidebar"},"faq/faq":{"id":"faq/faq","title":"\u5e38\u89c1\u95ee\u9898","description":"\u672c\u6587\u4f1a\u5b9a\u671f\u66f4\u65b0\uff0c\u7528\u4e8e\u89e3\u7b54\u7528\u6237\u5e38\u89c1\u7684 K3s \u76f8\u5173\u95ee\u9898\u3002","sidebar":"mySidebar"},"helm/helm":{"id":"helm/helm","title":"Helm","description":"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u901a\u8fc7 Helm\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u53ef\u914d\u7f6e\u7684 deployment\uff0c\u800c\u4e0d\u4ec5\u4ec5\u53ea\u80fd\u4f7f\u7528\u9759\u6001\u6587\u4ef6\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 Deployment \u5546\u5e97\u5e94\u7528\uff0c\u8bf7\u53c2\u89c1 Helm \u6587\u6863\u3002","sidebar":"mySidebar"},"installation/airgap":{"id":"installation/airgap","title":"Air-Gap Install","description":"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters.","sidebar":"mySidebar"},"installation/configuration":{"id":"installation/configuration","title":"Configuration Options","description":"This page focuses on the options that are commonly used when setting up K3s for the first time. Refer to the documentation on Advanced Options and Configuration and the server and agent command documentation for more in-depth coverage.","sidebar":"mySidebar"},"installation/datastore":{"id":"installation/datastore","title":"Cluster Datastore Options","description":"This page has moved."},"installation/disable-flags":{"id":"installation/disable-flags","title":"Disable Components Flags","description":"This page has moved."},"installation/ha":{"id":"installation/ha","title":"High Availability with an External DB","description":"This page has moved."},"installation/ha-embedded":{"id":"installation/ha-embedded","title":"High Availability with Embedded DB","description":"This page has moved."},"installation/installation":{"id":"installation/installation","title":"Installation","description":"This section contains instructions for installing K3s in various environments. Please ensure you have met the Requirements before you begin installing K3s.","sidebar":"mySidebar"},"installation/kube-dashboard":{"id":"installation/kube-dashboard","title":"Kubernetes Dashboard","description":"This installation guide will help you to deploy and configure the Kubernetes Dashboard on K3s.","sidebar":"mySidebar"},"installation/network-options":{"id":"installation/network-options","title":"Network Options","description":"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6.","sidebar":"mySidebar"},"installation/packaged-components":{"id":"installation/packaged-components","title":"Managing Packaged Components","description":"Auto-Deploying Manifests (AddOns)","sidebar":"mySidebar"},"installation/private-registry":{"id":"installation/private-registry","title":"Private Registry Configuration","description":"Containerd can be configured to connect to private registries and use them to pull private images on the node.","sidebar":"mySidebar"},"installation/requirements":{"id":"installation/requirements","title":"Requirements","description":"K3s is very lightweight, but has some minimum requirements as outlined below.","sidebar":"mySidebar"},"installation/server-roles":{"id":"installation/server-roles","title":"Managing Server Roles","description":"Starting the K3s server with --cluster-init will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes.","sidebar":"mySidebar"},"installation/uninstall":{"id":"installation/uninstall","title":"Uninstalling K3s","description":"Uninstalling K3s deletes the local cluster data, configuration, and all of the scripts and CLI tools.","sidebar":"mySidebar"},"introduction":{"id":"introduction","title":"K3s - \u8f7b\u91cf\u7ea7 Kubernetes","description":"K3s \u662f\u8f7b\u91cf\u7ea7\u7684 Kubernetes\u3002K3s \u6613\u4e8e\u5b89\u88c5\uff0c\u4ec5\u9700\u8981 Kubernetes \u5185\u5b58\u7684\u4e00\u534a\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002","sidebar":"mySidebar"},"known-issues/known-issues":{"id":"known-issues/known-issues","title":"\u5df2\u77e5\u95ee\u9898","description":"\u6211\u4eec\u4f1a\u5b9a\u671f\u66f4\u65b0\u5df2\u77e5\u95ee\u9898\u6587\u6863\uff0c\u8bf4\u660e\u4e0b\u4e00\u4e2a\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u53ef\u80fd\u65e0\u6cd5\u7acb\u5373\u89e3\u51b3\u7684\u95ee\u9898\u3002","sidebar":"mySidebar"},"networking/networking":{"id":"networking/networking","title":"\u7f51\u7edc","description":"\u672c\u6587\u4ecb\u7ecd\u4e86 CoreDNS\u3001Traefik Ingress controller \u548c Klipper service load balancer \u662f\u5982\u4f55\u5728 K3s \u4e2d\u5de5\u4f5c\u7684\u3002","sidebar":"mySidebar"},"quick-start/quick-start":{"id":"quick-start/quick-start","title":"\u5feb\u901f\u5165\u95e8\u6307\u5357","description":"\u672c\u6307\u5357\u5e2e\u52a9\u4f60\u4f7f\u7528\u9ed8\u8ba4\u9009\u9879\u5feb\u901f\u542f\u52a8\u96c6\u7fa4\u3002\u5b89\u88c5\u90e8\u5206\u66f4\u8be6\u7ec6\u5730\u4ecb\u7ecd\u4e86\u5982\u4f55\u8bbe\u7f6e K3s\u3002","sidebar":"mySidebar"},"reference/agent-config":{"id":"reference/agent-config","title":"K3s Agent \u914d\u7f6e","description":"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Agent\u3002"},"reference/env-variables":{"id":"reference/env-variables","title":"\u73af\u5883\u53d8\u91cf","description":"\u5982\u5feb\u901f\u5165\u95e8\u6307\u5357\u4e2d\u6240\u8ff0\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 https://get.k3s.io \u4e0a\u63d0\u4f9b\u7684\u5b89\u88c5\u811a\u672c\u5728\u57fa\u4e8e systemd \u548c openrc \u7684\u7cfb\u7edf\u4e0a\u5c06 K3s \u5b89\u88c5\u4e3a\u670d\u52a1\u3002","sidebar":"mySidebar"},"reference/reference":{"id":"reference/reference","title":"Reference","description":"This section contains detailed coverage of the K3s install script, server/client configuration options, and instructions for use of additional tools.","sidebar":"mySidebar"},"reference/resource-profiling":{"id":"reference/resource-profiling","title":"K3s \u8d44\u6e90\u5206\u6790","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u6d4b\u8bd5\u7ed3\u679c\uff0c\u7528\u4e8e\u786e\u5b9a K3s \u7684\u6700\u4f4e\u8d44\u6e90\u8981\u6c42\u3002","sidebar":"mySidebar"},"reference/server-config":{"id":"reference/server-config","title":"K3s Server \u914d\u7f6e","description":"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Server\u3002"},"security/hardening-guide":{"id":"security/hardening-guide","title":"CIS Hardening Guide","description":"\u8bf7\u77e5\u6089\uff0c\u672c\u6587\u4ec5\u63d0\u4f9b\u82f1\u6587\u7248\u3002","sidebar":"mySidebar"},"security/secrets-encryption":{"id":"security/secrets-encryption","title":"Secret \u52a0\u5bc6","description":"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u9996\u6b21\u542f\u52a8 server \u65f6\uff0c\u4f20\u9012\u6807\u5fd7 --secrets-encryption \u5c06\u81ea\u52a8\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a","sidebar":"mySidebar"},"security/security":{"id":"security/security","title":"\u5b89\u5168","description":"\u672c\u8282\u4ecb\u7ecd\u4e86\u52a0\u5f3a K3s \u96c6\u7fa4\u5b89\u5168\u6027\u7684\u65b9\u6cd5\uff0c\u5305\u62ec 2 \u4e2a\u90e8\u5206\u3002\u672c\u6307\u5357\u5047\u8bbe K3s \u4e0e\u5d4c\u5165\u5f0f etcd \u4e00\u8d77\u8fd0\u884c\u3002","sidebar":"mySidebar"},"security/self-assessment":{"id":"security/self-assessment","title":"CIS Self Assessment Guide","description":"\u8bf7\u77e5\u6089\uff0c\u672c\u6587\u4ec5\u63d0\u4f9b\u82f1\u6587\u7248\u3002","sidebar":"mySidebar"},"storage/storage":{"id":"storage/storage","title":"\u5377\u548c\u5b58\u50a8","description":"\u5728\u90e8\u7f72\u9700\u8981\u4fdd\u200b\u200b\u7559\u6570\u636e\u7684\u5e94\u7528\u65f6\uff0c\u4f60\u9700\u8981\u521b\u5efa\u6301\u4e45\u5b58\u50a8\u3002\u6301\u4e45\u5b58\u50a8\u5141\u8bb8\u4f60\u5728\u8fd0\u884c\u5e94\u7528\u7684 pod \u4e4b\u5916\u5b58\u50a8\u5e94\u7528\u6570\u636e\u3002\u5373\u4f7f\u8fd0\u884c\u5e94\u7528\u7684 pod \u53d1\u751f\u6545\u969c\uff0c\u8fd9\u79cd\u5b58\u50a8\u65b9\u5f0f\u4e5f\u80fd\u8ba9\u4f60\u4fdd\u7559\u5e94\u7528\u6570\u636e\u3002","sidebar":"mySidebar"},"upgrades/automated":{"id":"upgrades/automated","title":"\u81ea\u52a8\u5347\u7ea7","description":"Overview","sidebar":"mySidebar"},"upgrades/killall":{"id":"upgrades/killall","title":"\u505c\u6b62 K3s","description":"\u4e3a\u4e86\u5728\u5347\u7ea7\u671f\u95f4\u5b9e\u73b0\u9ad8\u53ef\u7528\u6027\uff0cK3s \u5bb9\u5668\u5728 K3s \u670d\u52a1\u505c\u6b62\u65f6\u4f1a\u7ee7\u7eed\u8fd0\u884c\u3002","sidebar":"mySidebar"},"upgrades/manual":{"id":"upgrades/manual","title":"\u624b\u52a8\u5347\u7ea7","description":"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u6240\u9700\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002","sidebar":"mySidebar"},"upgrades/upgrades":{"id":"upgrades/upgrades","title":"\u5347\u7ea7","description":"\u5347\u7ea7 K3s \u96c6\u7fa4","sidebar":"mySidebar"}}}')}}]);