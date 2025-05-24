### What is Intelligence Gathering?

Intelligence Gathering — also called reconnaissance — is the first hands-on phase of a penetration test and a foundational one. Its main goal is to collect as much information as possible about the target, including technologies, systems, and potential entry points. This process helps build a complete picture of the attack surface and identify data that can be leveraged in later stages of the test.

There are two major categories of intelligence gathering, each with a different level of interaction and stealth:

---

#### 1. Passive Reconnaissance

Passive reconnaissance is all about observation — gathering intelligence without direct interaction with the target systems. The idea is to use publicly available sources or tools in a non-intrusive way so that detection is minimized or avoided entirely.



| Technique                | Description                                                                 | Example Tools / Methods                         | Detection Risk |
|-------------------------|-----------------------------------------------------------------------------|-------------------------------------------------|----------------|
| **Search Engine Queries** | Using search engines to gather publicly available info (e.g., employees, domains). | Google, Shodan, DuckDuckGo                      | Very Low       |
| **WHOIS Lookups**        | Finding domain registrant info, contact details, name servers.             | `whois`, online WHOIS services                  | Very Low       |
| **DNS Analysis**         | Analyzing DNS records for subdomains, mail servers, etc.                   | `dig`, `nslookup`, `host`, `fierce`, `dnsrecon` | Very Low       |
| **Web Archive Analysis** | Viewing historical versions of a site to find hidden/removed content.      | Wayback Machine                                 | Very Low       |
| **Social Media Analysis**| Collecting target-related info from social platforms.                      | LinkedIn, Twitter, Facebook                     | Very Low       |
| **Code Repositories**    | Analyzing exposed source code or credentials.                              | GitHub, GitLab                                  | Very Low       |
| **Domain Enumeration**   | Identifying target domains/subdomains from public sources.                 | `Sublist3r`, `crt.sh`, `Amass`                  | Very Low       |
| **Packet Inspection**    | Capturing public traffic to analyze protocols and behaviors.               | Wireshark, tcpdump                              | Low            |
| **Recon-ng**             | Automated recon framework for OSINT data gathering.                        | Recon-ng                                        | Low            |


---

#### 2. Active Reconnaissance

Active reconnaissance involves direct interaction with the target, like sending crafted requests or scanning ports. This method is powerful but also riskier, as it can trip alarms, trigger logs, or disrupt services. In penetration testing, it's used only on approved assets, within the rules of engagement.

| Technique                | Description                                                                 | Example Tools / Methods                          | Detection Risk |
|-------------------------|-----------------------------------------------------------------------------|--------------------------------------------------|----------------|
| **Host Enumeration**     | Discovering live hosts in a network.                                       | `ping`, `nmap -sn`                               | Medium          |
| **Port Scanning**        | Scanning for open ports and services.                                      | `nmap`, `masscan`, `unicornscan`                 | High            |
| **Service Enumeration**  | Identifying services running on open ports.                                | `nmap -sV`, `netcat`                             | Low to Medium   |
| **OS Fingerprinting**    | Identifying the operating system in use.                                   | `nmap -O`, `xprobe2`                             | Low             |
| **Banner Grabbing**      | Reading service banners for software details.                              | `curl`, `netcat`, `telnet`                       | Low             |
| **Web Spidering**        | Crawling websites to map structure and gather content.                     | Burp Suite Spider, OWASP ZAP                     | Low to Medium   |
| **Network Mapping**      | Mapping routers, paths, hops to destination.                               | `traceroute`, `nmap`                             | Medium to High  |
| **User Enumeration**     | Identifying valid usernames via responses.                                 | Hydra, Medusa, Kerbrute                          | High            |
| **Application Enumeration**| Finding exposed functions or routes in web apps.                          | Dirb, Gobuster, Burp Suite                       | Medium          |
| **Packet Crafting**      | Sending custom packets to analyze target responses.                        | Scapy, Hping3                                    | High            |

---

In summary, passive recon is your silent, stealthy and unnoticed whereas active recon is more noisy and with that comes greater risk and responsibility. Yet, both are essential to building a strong foundation before moving into the more aggressive phases of a penetration test.
