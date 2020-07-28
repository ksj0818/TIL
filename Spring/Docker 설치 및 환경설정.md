## Docker 설치 및 환경설정

- 일반적인 다운로드
  https://hub.docker.com/editions/community/docker-ce-desktop-windows/
  Get stable (stable: 안정적인 버전이라는 뜻)
  
- 📌**Docker Desktop requires Windows 10 Pro/Enterprise (15063+) or Windows 10 Home (19018+). 에러 발생 (Windows 10 Home)**

  윈도우에서 설치 실패.

- ubuntu 에서 명령어 : apt-get 

- CentOS 에서 명령어 : yum

wsl ubuntu 정리

ubuntu docker-ce 설치

❌ gpg: can't connect to the agent: IPC connect call failed

👉 해결

~~~bash
sudo apt remove gpg
sudo apt install gnupg1
~~~



❌ add-apt-repository: command not found

~~~bash
sudo apt-get install software-properties-common
~~~



ubuntu 들어가는 법  화살표 클릭

![image-20200725171259434](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200725171259434.png)

