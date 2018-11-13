@echo off

echo building...

set deployDirectory=%~dp0
set sourceDirectory=%deployDirectory%..

d:
cd %deployDirectory%
cd ..
call npm run build

cd %deployDirectory%
set buildFolder=build
if not exist %buildFolder% (
    md %buildFolder%
)

cd %sourceDirectory%
xcopy /E .nuxt %deployDirectory%%buildFolder%"\.nuxt\"
xcopy /E node_modules %deployDirectory%%buildFolder%"\node_modules\"
xcopy /E static %deployDirectory%%buildFolder%"\static\"
copy nuxt.config.js %deployDirectory%%buildFolder%
copy package.json %deployDirectory%%buildFolder%

echo build complete