(function (Prism) {
    Prism.languages.mikrotik = {
        'comment': /#.*/,
        'value': {
            pattern: /([a-z]+=)([-0-9a-zA-Z,_\/\.]+)/,
            lookbehind: true
        },
        'parameter': {
            pattern: /\b([-a-z]+=)/,
            lookbehind: false 
        },
        'function': {
            pattern: /^(\/caps-man|\/certificate|\/file|\/hotspot|\/password|\/interface|\/ip|\/ipv6|\/mpls|\/ping|\/queue|\/radius|\/routing|\/snmp|\/system|\/tool|\/user|truefriend-cz|accept-filter|access|access-list|accounting|action|add|address|address-list|advertise-filter|advertisements|aggregate|alert|align|area|arp|bandwidth-server|bandwidth-test|bfd|bgp|bgp-vpls|binding|bonding|bridge|bridge-|cache|cache-contents|caps-man|cisco-bgp-vpls|client|clock|community|config|configuration|connect-list|connection|connections|console|cookie|cpu|customer|debug|default|detail|dhcp-client|dhcp-relay|dhcp-server|direct|disable|discovery|dns|dns-update|e-mail|edit|enable|eoip|eth-|ethernet|export|fdb|fetch|filter|find|firewall|firmware|flush|get|gps|graphing|gre|gre6|group|hardware|health|host|hotspot|identity|igmp-proxy|inbox|incoming|info|inserts|installed-sa|instance|interface|interface0|interfaces|ip|ip-binding|ip-scan|ipip|ipsec|ipv6|irq|key|keys|l2tp-client|l2tp-server|lan|latency-distribution|layer7-protocol|lcd|ldp|lease|leds|logging|lookup|lsa|mac-server|mac-winbox|manager|mangle|manual|manual-sa|manual-tx-power-table|mesh|mirror|mme|mode-cfg|monitor|mpls|nat|nbma-neighbor|nd|neighbor|Neighbor|netwatch|network|note|nstreme|nstreme-dual|ntp|option|originators|ospf|ospf-router|ospf-v3|ovpn-client|ovpn-server|package|packet|packet-generator|packet-template|page|pages|path-state|pci|peer|pim|ping|policy|pool|port|ppp|ppp-client|pppoe|pppoe-client|pppoe-server|pptp|pptp-client|pptp-server|prefix|prefix-list|print|profile|proposal|protocol|provisioning|proxy|queue|radius|range|raw|registration-table|remote-peers|remove|resource|resv-state|rip|ripng|route|routerboard|routing|run|scan|scep|scheduler|screen|script|security-profiles|send|server|service|service-port|set|settings|sham-link|share|shares|smb|sms|snapshot|sniffer|snmp|snooper|socks|sstp-client|sstp-server|statistics|stats|status|switch|system|target|tool|tracking|traffic-eng|traffic-flow|traffic-generator|traffic-monitor|tree|tunnel-path|type|uncounted|upgrade|upnp|ups|usb|used|user|user-manager|users|virtual-link|vlan|vpls|vpnv4-route|vrf|vrrp|walled-garden|wan|watchdog|wds|web-access|wireless|wlan)\b/m,
            greedy: true
        },
        'class-name': /\b(2ghz-5mhz-power-channels|2ghz-10mhz-power-channels|2ghz-11n-channels|2ghz-b-channels|2ghz-g-channels|2ghz-g-turbo-channels|5ghz-5mhz-power-channels|5ghz-10mhz-power-channels|5ghz-11n-channels|5ghz-channels|5ghz-turbo-channels|6to4-interface|802.1x-port-enabled|802.3-sap|802.3-type|ac-mac|ac-name|accept|accept-dynamic-neighbors|accept-redirects|accept-router-advertisements|accept-source-route|accessible-via-web|account-local-traffic|accounting|ack-timeout|action|active|active-address|active-client-id|active-cpu|active-flow-timeout|active-interfaces|active-links|active-mac-address|active-mode|active-port-type|active-server|actual-interface|actual-tx-interval|adaptive-noise-immunity|add-arp|add-default-route|add-lifetime|add-mac-cookie|add-relay-info|address|address6|address-families|address-family|address-list|address-list-timeout|address-pool|address-prefix-length|addresses|addresses-per-mac|addtime|adjacency|adjacent-neighbors|admin-mac|advertise|advertise-dns|advertise-filter|advertise-interval|advertise-mac-address|advertise-timeout|advertise-url|advertised-l2mtu|affinity-exclude|affinity-include-all|affinity-include-any|age|ageing-time|agent-circuit-id|agent-remote-id|aggregator|AH|ah-algorithm|ah-key|ah-spi|alarm-setting|alert-timeout|allocate-udp-ports-from|allow|allow-address|allow-as-in|allow-disable-external-interface|allow-fast-path|allow-guests|allow-remote-requests|allow-sharedkey|allow-target|allowed-number|always-broadcast|always-from-cache|antenna-gain|antenna-mode|ap|ap-tx-limit|apn|append-bgp-communities|append-route-targets|architecture-name|area|area-id|area-prefix|arp|arp-dst-address|arp-dst-mac-address|arp-gratuitous|arp-hardware-type|arp-interval|arp-ip-targets|arp-opcode|arp-packet-type|arp-ping|arp-src-address|arp-src-mac-address|arp-timeout|as|as4-capability|as-override|as-path|ascii|assured|atomic-aggregate|attribute-filter|audio-max|audio-min|audio-monitor|auth|auth-algorithm|auth-algorithms|auth-key|auth-method|authenticate|authentication|authentication-key|authentication-key-id|authentication-password|authentication-protocol|authentication-type|authentication-types|authoritative|authority|auto-bandwidth-avg-interval|auto-bandwidth-range|auto-bandwidth-reserve|auto-bandwidth-update-interval|auto-mac|auto-negotiation|auto-send-supout|automatic-supout|autonomous|backlight-timeout|backup-allowed|backup-designated-router|backup-dr-address|bad-blocks|band|bandwidth|bandwidth-limit|basic-rates-a\/g|basic-rates-b|battery-charge|battery-voltage|baud-rate|bearing|bgp|bgp-as-path|bgp-as-path-length|bgp-atomic-aggregate|bgp-communities|bgp-ext-communities|bgp-local-pref|bgp-med|bgp-origin|bgp-prepend|bgp-weight|bidirectional-timeout|blank-interval|blink|block-access|blockade-k-factor|blocked|board|board-name|body|boot-device|boot-file-name|boot-protocol|bootp-support|bridge|bridge-cost|bridge-horizon|bridge-mode|bridge-path-cost|bridge-port-priority|broadcast|broadcast-addresses|bsd-syslog|burst-limit|burst-threshold|burst-time|bytes|bytes-in|bytes-out|ca|ca-crl-host|ca-fingerprint|ca-identity|cable-setting|cable-settings|cable-test|cache-administrator|cache-entries|cache-hit-dscp|cache-max-ttl|cache-on-disk|cache-path|cache-size|caller-id|capabilities|caps-man-addresses|category|cc|certificate|chain|challenge-password|change-tcp-mss|channel|channel-time|channel-width|channel.band|channel.extension-channel|channel.width|check-certificate|check-gateway|check-interval|check-status|checksum|chip-info|cipher|cisco-bgp-signaled|cisco-style|cisco-style-id|cisco-vpls-nlri-len-fmt|client|client-id|client-to-client-reflection|client-tx-limit|cluster-id|cluster-list|code|comment|common-name|communities|compression|confederation|confederation-peers|connect|connect-to|connection-bytes|connection-idle-timeout|connection-limit|connection-mark|connection-rate|connection-state|connection-type|contact|content|contents|contrast|cost|count|country|cpu|cpu-count|cpu-frequency|cpu-load|creation-time|crl|current-bytes|current-mac-address|data|data-bits|data-byte|data-channel|datapath|datapath.bridge|datapath.client-to-client-forwarding|datapath.local-forwarding|date-and-time|days-valid|db-exchanges|db-summaries|dead-interval|default|default-ap-tx-limit|default-authentication|default-cable-settings|default-client-tx-limit|default-cost|default-for-dynamic|default-forwarding|default-group|default-name|default-originate|default-periodic-calibration|default-profile|default-route-distance|default-screen|default-vlan-id|delay-threshold|denied|designated-port-count|designated-router|desired-tx-interval|device|device-id|dfs-mode|dh-group|dhcp|dhcp-option|dhcp-options|dhcp-server,dial-command|dial-on-demand|dijkstras|direction|directory|disable-csma|disable-running-check|disabled|disconnect-timeout|discover|discovery-interfaces|disk|disk-file-count|disk-file-name|disk-lines-per-file|disk-stop-on-full|display-time|distance|distribute-default|distribute-for-default-route|DNS|dns-name|dns-server|do-not-fragment|domain|domain-id|domain-tag|down-delay|down-flood-thresholds|down-script|dpd-interval|dpd-maximum-failures|dr-address|dsa|dscp|dst|dst-address|dst-address-list|dst-address-type|dst-delta|dst-end|dst-host|dst-limit|dst-mac-address|dst-path|dst-port|dst-start|dst-user|duid|duration|dynamic|dynamic-label-range|e|eap-methods|edge|edge-port|edge-port-discovery|effective-router-id|egress|email|email-to|enable-nstreme|enable-polling|enabled|enc-algorithm|enc-algorithms|encoding|encryption|encryption-password|encryption-protocol|engine-id|errors|ESP|esp-auth-algorithm|esp-auth-key|esp-enc-algorithm|esp-enc-key|esp-spi|established|eui-64|evm-ch0|evm-ch1|evm-ch2|exchange-mode|exclude-groups|expire-time|expired|expires-after|expires-in|export-pub-key|export-route-target|external-fdb|external-imports|file|file-limit|file-name|file-size|filter-direction|filter-interface|filter-ip-address|filter-ip-protocol|filter-mac|filter-mac-address|filter-mac-protocol|filter-operator-between-entries|filter-port|filter-stream|fingerprint|fingerprint-algorithm|firmware|first-header|flow-control|flow-control-auto|flow-control-rx|flow-control-tx|force-aes|force-backup-booter|forward|forward-delay|forwarding|fragment|fragment-offset|frame-bytes|frame-lifetime|frame-size|framer-limit|framer-policy|frames|frames-per-second|framing-current-size|framing-limit|framing-mode|free-hdd-space|free-memory|frequency|frequency-mode|frequency-offset|from|from-address|from-date|from-pool|from-time|full-duplex|garbage-timer|gateway|gateway-class|gateway-keepalive|gateway-selection|gateway-status|generate-key|generate-policy|generic-timeout|global|graph|gre-key|gre-version|group|group-ciphers|group-encryption|group-key-update|hash-algorithm|header-stack|hello-interval|hide-ssid|hits|hold-time|holding-priority|hop-limit|hoplimit|hops|horizon|host|host-name|hotspot|hotspot-address|ht-ampdu-priorities|ht-amsdu-limit|ht-amsdu-threshold|ht-basic-mcs|ht-chains|ht-channel-width|ht-guard-interval|ht-rates|ht-rxchains|ht-streams|ht-supported-mcs|ht-txchains|html-directory|http-cookie-lifetime|http-proxy|hw-fragmentation-threshold|hw-frame-bytes|hw-frames|hw-protection-mode|hw-protection-threshold|hw-retries|hwmp-default-hoplimit|hwmp-prep-lifetime|hwmp-preq-destination-only|hwmp-preq-reply-and-forward|hwmp-preq-retries|hwmp-preq-waiting-time|hwmp-rann-interval|hwmp-rann-lifetime|hwmp-rann-propagation-delay|iaid|icmp-code|icmp-id|icmp-options|icmp-rate-limit|icmp-rate-mask|icmp-timeout|icmp-type|id|identification|identity|idle-time|idle-timeout|ignore-as-path-len|ignore-directip-modem|igp-flood-period|import|import-route-target|imposed-label|in-accepted|in-bridge|in-bridge-port|in-buffer-errors|in-dropped|in-errors|in-filter|in-header-errors|in-interface|in-label|in-no-policies|in-no-states|in-policy-blocked|in-policy-errors|in-prefix-list|in-previous-hop|in-state-expired|in-state-invalid|in-state-mismatches|in-state-mode-errors|in-state-protocol-errors|in-state-sequence-errors|in-template-mismatches|in-transformed|inactive|inactive-flow-timeout|include-igp|incoming-filter|incoming-packet-mark|info|info-channel|ingress-priority|inherit-attributes|inject-summary-lsas|insert-queue-before|instance|inteface|interface|interface-name|interface-type|interfaces|interim-update|interval|invalid|invalid-after|invalid-before|invert-math|io|ip-address|ip-dscp|ip-dst|ip-forward|ip-forwarding|ip-frag-off|ip-gateway|ip-header-size|ip-id|ip-packet-size|ip-protocol|ip-src|ip-ttl|ipsec-protocols|ipv4-options|ipv6|irq|issued|issuer|jump-target|k-factor|keep-max-sms|keep-result|keepalive|keepalive-time|keepalive-timeout|key|key-bits|key-chain|key-id|key-name|key-size|key-usage|kind|l2mtu|l2router-id|label|lacp-rate|last-accessed|last-accessed-time|last-activity|last-ip|last-modified|last-modified-time|last-packet-before|last-seen|latency|latency-distribution-max|latency-distribution-measure-interval|latency-distribution-samples|latency-distribution-scale|latitude|layer7-protocol|learning|lease-script|lease-time|leds|level|life-time|lifebytes|lifetime|limit|limit-at|limit-bytes-in|limit-bytes-out|limit-bytes-total|limit-uptime|line-count|line-voltage|link-local|link-monitoring|list|load|local|local-address|local-label|local-port|local-pref|local-transport|local-tx-speed|local-udp-tx-size|locality|locally-originated|locally-originated-bgp|location|log-prefix|login|login-by|longitude|loop-detect|low-battery|ls-requests|ls-retransmits|lsr-id|mac-address|mac-auth-password|mac-cookie-timeout|mac-dst|mac-protocol|mac-src|make-static|managed-address-configuration|management-protection|management-protection-key|manual-sa|manual-tx-powers|manufacture-date|manycast|master-configuration|master-interface|master-port|match-chain|max-cache-object-size|max-cache-size|max-client-connections|max-connections|max-entries|max-fresh-time|max-limit|max-message-age|max-mru|max-mtu|max-prefix-limit|max-prefix-restart-time|max-server-connections|max-sessions|max-station-count|max-udp-packet-size|mbps|mdix-enable|med|memory|memory-limit|memory-lines|memory-scroll|memory-stop-on-full|mesh|mesh-portal|message|messages-rx|messages-tx|method|metric|metric-bgp|metric-connected|metric-default|metric-ospf|metric-other-ospf|metric-rip|metric-static|mii-interval|min-runtime|min-rx|mirror-source|mirror-target|mode|mode-cfg|model|modem-init|modem-signal-treshold|monitor|monitor-traffic|mpls-mtu|mpls-te-area|mpls-te-router-id|mq-pfifo-limit|mrru|mru|mschapv2-password|mschapv2-username|mss|mtu|multi-cpu|multicast|multicast-buffering|multicast-helper|multihop|multiple-channels|multiplier|my-id-user-fqdn|name|name-format|nas-port-type|nat-traversal|neighbor|neighbor-id|neighbors|NET-BIOS|netmask|network|network-type|new-connection-mark|new-dscp|new-mss|new-packet-mark|new-priority|new-routing-mark|new-ttl|next-hop|next-server|nexthop|nexthop-choice|no-expiration-info|no-memory|no-ping-delay|noise-floor-threshold|nominal-battery-voltage|non-cacheable|non-output|not-found|note|nstreme|nth|ntp-server|null-modem|num|number|nv2-cell-radius|nv2-noise-floor-offset|nv2-preshared-key|nv2-qos|nv2-queue-count|nv2-security|offline-after|offline-time|on-alert|on-backup|on-battery|on-event|on-fail-retry-time|on-interface|on-line|on-link|on-login|on-logout|on-master|one-session-per-host|only-headers|only-one|open-status-page|operational|option|options|organization|organziation|orig-mac-address|origin|origination-interval|originator|originator-id|ospf|ospf-metric|ospf-type|other-configuration|out-accepted|out-bridge|out-bridge-port|out-bundle-check-errors|out-bundle-errors|out-dropped|out-errors|out-filter|out-interface|out-label|out-next-hop|out-no-states|out-policy-blocked|out-policy-dead|out-policy-errors|out-prefix-list|out-state-expired|out-state-mode-errors|out-state-protocol-errors|out-state-sequence-errors|out-transformed|outgoing-filter|outgoing-packet-mark|output-voltage|overloaded-output|owner|p2p|p-throughput|package-architecture|package-built-time|package-name|package-path|package-version|packed-bytes|packed-frames|packet-mark|packet-size|packet-type|packets|packets-in|packets-out|packets-rx|page-refresh|parent|parent-proxy|parent-proxy-port|parent-queue|parity|passive|passphrase|passthrough|password|path|path-cost|path-in-explicit-route|path-in-record-route|path-out-explicit-route|path-out-record-route|path-vector-limit|paypal-accept-pending|paypal-allowed|paypal-secure-response|pci-info|pcq-burst-rate|pcq-burst-threshold|pcq-burst-time|pcq-classifier|pcq-dst-address6-mask|pcq-dst-address-mask|pcq-limit|pcq-rate|pcq-src-address6-mask|pcq-src-address-mask|pcq-total-limit|peek-rate|peer|per-connection-classifier|periodic-calibration|periodic-calibration-interval|permissions|pfifo-limit|pfs|pfs-group|ph2-state|phone|phy-regs|pin|platform|poe-out|poe-priority|point-to-point|point-to-point-port|policy|policy-group|poll-interval|pool|pool-name|pool-prefix-length|port|port-count|port-number|port-type|ports|pps|preamble-mode|preemption-mode|pref-src|preferred-gateway|preferred-lifetime|prefix|prefix-count|prefix-length|primary|primary-dns|primary-ntp|primary-path|primary-retry-interval|primary-server|priority|prism-cardtype|private-algo|private-key|private-pre-shared-key|profile|propagate-ttl|proposal|proposal-check|proprietary-extension|proprietary-extensions|protected-routerboot|protocol|protocol-mode|protocols|psd|pw-mtu|pw-type|query-interval|query-response-interval|query-server-timeout|query-total-timeout|queue|queue-type|quick|quick-leave|ra-delay|ra-interval|ra-lifetime|radio-mac|radio-name|radius|radius-accounting|radius-default-domain|radius-eap-accounting|radius-interim-update|radius-location-name|radius-mac-accounting|radius-mac-authentication|radius-mac-caching|radius-mac-format|radius-mac-mode|random|random-data|range|ranges|rate|rate-limit|rate-selection|rate-set|rates-a\/g|rates-b|raw-header|raw-value|reachable-time|read-access|read-only|receive|receive-all|receive-enabled|receive-errors|received-from|record-route|recorded-route|red-avg-packet|red-burst|red-limit|red-max-threshold|red-min-threshold|redirect-to|redistribute-bgp|redistribute-connected|redistribute-ospf|redistribute-other-bgp|redistribute-other-ospf|redistribute-rip|redistribute-static|refresh-capability|refresh-time|regexp|reject|reject-with|relay|release|remaining-bw|remember|remote|remote-address|remote-as|remote-certificate|remote-group|remote-hold-time|remote-id|remote-ipv6-prefix-pool|remote-label|remote-mac|remote-min-rx|remote-peer|remote-port|remote-status|remote-tx-speed|remote-udp-tx-size|remove-private-as|renew|reoptimize-interval|reoptimize-paths|replace-battery|replay|reply|reply-dst-address|reply-src-address|req-fingerprint|require-client-certificate|required-min-rx|resends|reset-alert|reset-counters|reset-counters-all|reset-mac-address|resource-class|resv-bandwidth|resv-out-record-route|retransmit-interval|revoked|rip|role|root-bridge|root-bridge-id|root-path-cost|root-port|route-comment|route-distinguisher|route-reflect|route-tag|route-target|router|router-id|routeros-version|routes|routing-mark|routing-table|rp-filter|rp_filter|run|running|runtime-calibration-running|runtime-left|rx-64|rx-65-127|rx-128-255|rx-256-511|rx-512-1023|rx-1024-1518|rx-1519-max|rx-align-error|rx-band|rx-broadcast|rx-bytes|rx-ccq|rx-chains|rx-channel-width|rx-fcs-error|rx-fragment|rx-frequency|rx-multicast|rx-overflow|rx-pause|rx-radio|rx-rate|rx-runt|rx-too-long|sa-dst-address|sa-src-address|sa-type|same-not-by-dst|satellites|scan-list|scep-url|scope|secondary-dns|secondary-ntp|secondary-paths|secondary-server|secret|secure-redirects|security|security-profile|security.authentication-types|security.encryption|security.group-encryption|security.passphrase|seen|send|send-dns|send-email-from|send-email-to|send-initial-contact|send-redirects|send-smtp-server|send-targeted|sending-path|sending-resv|sending-rstp|sending-targeted-hello|seq-number|sequence-number|serial|serial-number|serialize-connections|server|servers|service|service-name|session-timeout|set-bgp-communities|set-bgp-local-pref|set-bgp-med|set-bgp-prepend|set-bgp-prepend-path|set-bgp-weight|set-check-gateway|set-disabled|set-distance|set-in-nexthop|set-in-nexthop-direct|set-in-nexthop-ipv6|set-in-nexthop-linklocal|set-metric|set-out-nexthop|set-out-nexthop-ipv6|set-out-nexthop-linklocal|set-pref-src|set-route-comment|set-route-tag|set-route-targets|set-routing-mark|set-scope|set-site-of-origin|set-system-time|set-target-scope|set-type|set-use-te-nexthop|setup|setup-priority|sfp-rate-select|sfq-allot|sfq-perturb|share|shared|shared-users|show-at-login|show-dummy-rule|side|signal-range|signal-strength|signal-strength-ch0|signal-strength-ch1|signal-strength-ch2|signal-to-noise|signup-allowed|silent-boot|sim-pin|simple-queue|since|sip-direct-media|site-id|site-of-origin|size|skin|slave|slave-configurations|slaves|smart-boost-mode|smart-card-key|smart-ssdd-mode|smtp-server|SNMP|software-id|source|speed|spi|split-include|split-user-domain|src|src-address|src-address-list|src-address-type|src-mac|src-mac-address|src-path|src-port|src-user|ssid|ssid-all|ssl-certificate|start|start-date|start-time|start-tls|state|state-after-reboot|state-changes|static|static-algo-0|static-algo-1|static-algo-2|static-algo-3|static-key-0|static-key-1|static-key-2|static-key-3|static-sta-private-algo|static-sta-private-key|static-transmit-key|station-bridge-clone-mac|stats-samples-to-keep|status|status-autorefresh|stop|stop-bits|store-every|store-leases-disk|store-name|store-on-disk|stp-flags|stp-forward-delay|stp-hello-time|stp-max-age|stp-msg-age|stp-port|stp-root-address|stp-root-cost|stp-root-priority|stp-sender-address|stp-sender-priority|stp-type|streaming-enabled|streaming-max-rate|streaming-server|strength-at-rates|subject|successes|summary-only|supplicant-identity|supported-bands|supported-rates-a\/g|supported-rates-b|suppress-filter|switch|switch-to-spt|switch-to-spt-bytes|switch-to-spt-interval|synchronize|syslog-facility|syslog-severity|syslog-time-format|target|target-addresses|target-scope|tcp-close-timeout|tcp-close-wait-timeout|tcp-connection-count|tcp-established-timeout|tcp-fin-wait-timeout|tcp-flags|tcp-last-ack-timeout|tcp-md5-key|tcp-mss|tcp-state|tcp-syn-received-timeout|tcp-syn-sent-timeout|tcp-syncookie|tcp-syncookies|tcp-time-wait-timeout|tcp_syncookies|tdma-debug|tdma-hw-test-mode|tdma-override-rate|tdma-override-size|tdma-period-size|tdma-retx|tdma-rx-size|tdma-test-mode|tdma-timing-offset|tdma-tx-size|tdma-windfull|te-metric|template|term|test-audio|test-id|threshold|time|time-zone|time-zone-autodetect|time-zone-name|timeout|timeout-timer|timestamp|tls|tls-certificate|tls-mode|to|to-address|to-addresses|to-arp-reply-mac-address|to-dst-mac-address|to-ports|to-src-mac-address|too-large|top-bits|topics|total|total-entries|total-hdd-space|total-memory|touch-screen|traffic|transfer-cause|transit-area|translator-role|transmit-delay|transmit-hash-policy|transmit-hold-count|transparent-proxy|transport|transport-address|transport-nexthop|trap-community|trap-generators|trap-target|trap-version|trial-uptime|trial-uptime-reset|trial-user-profile|trigger|trusted|ttl|tunnel|tunnel-id|tx-64|tx-65-127|tx-128-255|tx-256-511|tx-512-1023|tx-1024-1518|tx-1519-max|tx-align-error|tx-band|tx-broadcast|tx-bytes|tx-ccq|tx-chains|tx-channel-width|tx-evm-ch0|tx-evm-ch1|tx-evm-ch2|tx-fcs-error|tx-fragment|tx-frames-timed-out|tx-frequency|tx-multicast|tx-overflow|tx-pause|tx-power|tx-power-mode|tx-radio|tx-rate|tx-runt|tx-signal-strength|tx-signal-strength-ch0|tx-signal-strength-ch1|tx-signal-strength-ch2|tx-template|tx-too-long|type|udp-dst-port|udp-src-port|udp-stream-timeout|udp-timeout|unicast-ciphers|unit|unknown-server|unpack|unreachable|up|up-delay|up-flood-thresholds|up-script|update-source|update-stats-interval|update-timer|updates-received|updates-sent|upgrade-policy|upload|uptime|uri|url|usb-version|use-bfd|use-compression|use-control-word|use-cspf|use-dn|use-encryption|use-explicit-null|use-ip-firewall|use-ip-firewall-for-pppoe|use-ip-firewall-for-vlan|use-ipv6|use-mpls|use-peer-dns|use-peer-ntp|use-radius|use-service-tag|use-src-mac|use-udp|use-vj-compression|used-hold-time|used-keepalive-time|user|username|users|v3-protocol|v9-template-refresh|v9-template-timeout|valid|valid-lifetime|valid-server|value|value-name|vcno|vendor|vendor-id|verify-client-certificate|verify-server-address-from-certificate|verify-server-certificate|version|vlan-encap|vlan-header|vlan-id|vlan-mode|vlan-priority|vlan-protocol|vpls|vpls-id|vrid|watch-address|watchdog-timer|wds|wds-address|wds-cost-range|wds-default-bridge|wds-default-cost|wds-ignore-ssid|wds-mode|wins-server|wireless-protocol|withdraws-received|withdraws-sent|wmm-enabled|wmm-support|wpa2-pre-shared-key|wpa-pre-shared-key|write-access|write-sect-since-reboot|write-sect-total|xauth-login|xauth-password|zone)\b/,
        'operator': /\b(add|beep|critical|delay|detail|do|else|environment|error|execute|export|file|find|for|foreach|get|global|if|import|in|info|led|len|local|log|nothing|parse|password|pick|ping|print|put|quit|redo|remove|resolve|return|set|setup|terminal|time|toarray|tobool|toid|toip|toip6|tonum|tostr|totime|typeof|undo|unset|warning|while)\b/
    }
}(Prism));