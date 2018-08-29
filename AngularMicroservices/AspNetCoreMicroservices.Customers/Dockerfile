FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 44301
EXPOSE 44300

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY AspNetCoreMicroservices.Customers/AspNetCoreMicroservices.Customers.csproj AspNetCoreMicroservices.Customers/
RUN dotnet restore AspNetCoreMicroservices.Customers/AspNetCoreMicroservices.Customers.csproj
COPY . .
WORKDIR /src/AspNetCoreMicroservices.Customers
RUN dotnet build AspNetCoreMicroservices.Customers.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AspNetCoreMicroservices.Customers.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AspNetCoreMicroservices.Customers.dll"]
