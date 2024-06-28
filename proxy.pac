function FindProxyForURL(url, host) {
    // Kiểm tra nếu địa chỉ IP của máy tính nằm trong dải mạng 172.25.8.0/23 hoặc 172.25.12.0/24
    if (isInNet(myIpAddress(), "172.25.8.0", "255.255.254.0") ||
        isInNet(myIpAddress(), "172.25.12.0", "255.255.255.0")) {
        return "PROXY 172.25.5.20:3128";
    } else {
        return "DIRECT";
    }
}
