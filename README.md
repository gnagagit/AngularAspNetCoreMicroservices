# AngularUIAspNetCoreMicroservices
Angular front end AspNetCoreMicroservices with Docker Support and Docker Compose. </br>

Windows10 Machine </br>
Visual Studio 2017 15.8.1 </br>
Docker 18.06.0-ce </br>
Docker compose 1.22.0 </br>
Docker Machine 0.15.0 </br>
LinuxKit v0.4 </br>
Docker and Visual Studio 2017 are in same machine </br>


Pull the repository <Strong> AngularAspNetCoreMicroservices </Strong>

1. Open Solution file <Strong> AngularMicroservices.sln </Strong> </br>
2. In developer command navigate to path ~\AngularMicroservices\AngularWebUI\
3. Install node components globally by running command <Strong> npm install -g @angular/cli </Strong>
4. In Solution Explorer expand AngularWebUI project, find the <Strong> package.json </Strong>. Right click the file and <Strong>Restore Packages</Strong>
5. In developer command navigate to path ~\AngularMicroservices\AngularWebUI\
6. run command <Strong> ng build </Strong>
7. Rebuild Solution by right clicking on solution AngularMicroservices in Solution Explorer. Make sure solution Rebuild without any fail. It should Rebuild without any fail
8. In AngularMicroservices solution property, Set Multiple Startup Projects. Select all projects to Start, Click Apply, Click Ok.
9. Press F5 to debug, you can rebuild solution just to make sure it builds without any fail.

Note: This solution crated for Linux container

URLs: </br>
Angular UI:</br>
https://localhost:44306

Cusotmer Microservice:</br>
https://localhost:44300/api/customers

Products Microservice:</br>
https://localhost:44302/api/products

APIGateway:</br>
https://localhost:44304/api/customers</br>
https://localhost:44304/api/products</br>

How to Docker Compose to create images</br>
1. In Visual Studio, set to Release mode and rebuild the solution, it would take bit more time to build
2. Open PowerShell or command prompt
3. To check whether images are crated or not run command docker images
4. To check if any containers running then use command docker ps -a

How to containerize the Docker images on HTTPS</br>
I believe you will already have development certificate, if not generate one and use correct password. You need to update these details in the
below commands before executing.

1. docker run --rm -it -p 44301:80 -p 44300:443 -e ASPNETCORE_URLS="https://+;http://+" -e ASPNETCORE_HTTPS_PORT=44300 -e ASPNETCORE_Kestrel__Certificates__Default__Password="Password" -e ASPNETCORE_Kestrel__Certificates__Default__Path=/https/aspnetapp.pfx -v C:\Users\naga\.aspnet\https:/https/ aspnetcoremicroservicescustomers
2. docker run --rm -it -p 44303:80 -p 44302:443 -e ASPNETCORE_URLS="https://+;http://+" -e ASPNETCORE_HTTPS_PORT=44302 -e ASPNETCORE_Kestrel__Certificates__Default__Password="Password" -e ASPNETCORE_Kestrel__Certificates__Default__Path=/https/aspnetapp.pfx -v C:\Users\naga\.aspnet\https:/https/ aspnetcoremicroservicesproducts
3. docker run --rm -it -p 44305:80 -p 44304:443 -e ASPNETCORE_URLS="https://+;http://+" -e ASPNETCORE_HTTPS_PORT=44304 -e ASPNETCORE_Kestrel__Certificates__Default__Password="Password" -e ASPNETCORE_Kestrel__Certificates__Default__Path=/https/aspnetapp.pfx -v C:\Users\naga\.aspnet\https:/https/ aspnetcoremicroservicesapigateway
4. docker run --rm -it -p 44307:80 -p 44306:443 -e ASPNETCORE_URLS="https://+;http://+" -e ASPNETCORE_HTTPS_PORT=44306 -e ASPNETCORE_Kestrel__Certificates__Default__Password="Password" -e ASPNETCORE_Kestrel__Certificates__Default__Path=/https/aspnetapp.pfx -v C:\Users\naga\.aspnet\https:/https/ angularwebui

Now try to access the docker container UI url https://localhost:44306 and click on buttons</br>

1. View Customers Microservices - Working</br>
2. View Products Microservices - Working</br>
3. View APIGateway Customers Microservices - Not Working need to fix</br>
4. View APIGateway Products Microservices - Not Working need to fix</br>
