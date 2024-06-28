function FindProxyForURL(url, host) {
    if (isInNet(myIpAddress(), "172.25.8.0", "255.255.255.0")) {
        return "PROXY your_proxy_server_address:port";
    } else {
        return "DIRECT";
    }
}
