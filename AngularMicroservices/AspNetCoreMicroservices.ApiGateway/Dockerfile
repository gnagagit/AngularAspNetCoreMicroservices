FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 44305
EXPOSE 44304

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY AspNetCoreMicroservices.ApiGateway/AspNetCoreMicroservices.ApiGateway.csproj AspNetCoreMicroservices.ApiGateway/
RUN dotnet restore AspNetCoreMicroservices.ApiGateway/AspNetCoreMicroservices.ApiGateway.csproj
COPY . .
WORKDIR /src/AspNetCoreMicroservices.ApiGateway
RUN dotnet build AspNetCoreMicroservices.ApiGateway.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AspNetCoreMicroservices.ApiGateway.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AspNetCoreMicroservices.ApiGateway.dll"]
