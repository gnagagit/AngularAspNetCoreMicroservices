FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 44307
EXPOSE 44306

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY AngularWebUI/AngularWebUI.csproj AngularWebUI/
COPY AspNetCoreMicroservices.Customers/AspNetCoreMicroservices.Customers.csproj AspNetCoreMicroservices.Customers/
COPY AspNetCoreMicroservices.Products/AspNetCoreMicroservices.Products.csproj AspNetCoreMicroservices.Products/
RUN dotnet restore AngularWebUI/AngularWebUI.csproj
COPY . .
WORKDIR /src/AngularWebUI
RUN dotnet build AngularWebUI.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AngularWebUI.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AngularWebUI.dll"]
