#!/bin/bash
#
for a in *.js; do mv -- "$a" "${a%.js}.jsx"; done
