#!/bin/bash

# Build do backoffice
cd ./backoffice
npm install
npm run build
echo "Backoffice build completo."

# Build do frontoffice
cd ../frontoffice
npm install
npm run build
echo "Frontoffice build completo."