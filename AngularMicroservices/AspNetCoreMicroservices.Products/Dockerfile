FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 44303
EXPOSE 44302

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY AspNetCoreMicroservices.Products/AspNetCoreMicroservices.Products.csproj AspNetCoreMicroservices.Products/
RUN dotnet restore AspNetCoreMicroservices.Products/AspNetCoreMicroservices.Products.csproj
COPY . .
WORKDIR /src/AspNetCoreMicroservices.Products
RUN dotnet build AspNetCoreMicroservices.Products.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AspNetCoreMicroservices.Products.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AspNetCoreMicroservices.Products.dll"]
