#!/bin/sh
# Sync the current folder to localhost
# Every 30 seconds
# Avoid updating localhost html folder everytime
count=1
while [ 1 ]; do sh launch.sh; echo -n $count' ' ; date; count=$((count+1)); sleep 30; done
