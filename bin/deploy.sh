#!/bin/bash
export APP=gdbot

npm run clean && \
npm run webpack && \
npm run lint 2 && \
npm run test && \
npm run gulp && \
rm -rf tmp