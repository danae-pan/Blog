#### What is Penetration Testing and why do we need it? 

Penetration testing is essentially a term of security assessment of a computer system or network in order to identify security vullnerabilities. The objective of the test is to simulate attacks that mimic the tactics and techniques of a real-world attacker, providing insights into the system’s security posture. 

This procedure is crucial for any organisation, since it reveals gaps in security measures, allowing organizations to fix these vulnerabilities before malicious actors can exploit them. Pentest also assess an organisation's data security and privacy regulations and it is actually required by the Payment Card Industy Data Security Standard (PCI-DSS), which mandates regular testing for companies that handle credit card information.

#### Penetration Testing Phases

Based on Penetration Testing Execution Standard (PTES), a penetration testing methodology and standard, the following seven (7) phases are typically included in a penetration test.

- Pre-Engagmement Interactions
- Intelligence Gathering
- Threat Modelling
- Vulnerabilit Analysis
- Exploitation
- Post Exploitation
- Reporting

If you think about it, excluding the first and last phase, those are the same phases of the cybersecurity kill chain which makes total sense since the tester is trying to mimic a real, malicious attacker moves in the target.


#### Penetration Testing Environment Types

Based on the information provided to the penster, three are the main levels of pen test access.

- **White Box**: This is also known as internal penetration testing or known-environment testing. In this type of test, the tester has full access to information about the target system, such as source code, network diagrams, and admin credentials. This simulates an insider threat scenario or a situation where the attacker has already bypassed some initial defenses.
- **Black Box**: In contrast to the white box test, a black box test, which is also known as external testing, is performed with minimal or no prior knowledge of the target system. The tester is given only basic information, such as an IP address or a domain name, and must discover vulnerabilities without any internal knowledge. This approach simulates a real-world external attack where the attacker has no insider information.
- **Grey Box**: A grey box test is a hybrid between the white and black box approaches. The tester is given some limited internal information but is not fully aware of the system’s inner workings. This approach simulates a scenario where an attacker may have gained partial access to the system and is attempting to expand their attack.

#### Penetration Testing Scope Types

Depending on the scope defined, the penetration testing can be one of the many:

- **Application pen test**: This type of test focuses on identifying vulnerabilities in various applications and related systems, such as web applications, websites, mobile apps, IoT apps, cloud-based services, and application programming interfaces (APIs). The tester's goal is to find weaknesses like SQL injection, cross-site scripting (XSS), and other application-level vulnerabilities that could be exploited
    
- **Network pen test**: A network penetration test involves assessing critical network infrastructure components like switches, routers, firewalls, and key supporting resources, such as authentication servers, authorization systems, and intrusion prevention systems (IPS). This test also includes wireless network security evaluation to ensure all entry points are secured.

- **Physical pen test**: The purpose of a physical penetration test is to evaluate an organization’s physical security controls. This test simulates attacks such as unauthorized access attempts to buildings, server rooms, and other sensitive areas, testing the effectiveness of security measures like locks, security cameras, and security personnel. It also includes social engineering tactics, such as tailgating or impersonation, to bypass physical security.

- **Hardware pen test**: This test evaluates vulnerabilities in devices connected to the organization's network, such as laptops, mobile devices, IoT devices, and other hardware. Pen testers look for software flaws, such as operating system vulnerabilities that allow remote access as well as physical vulnerabilities in the devices themselves.

