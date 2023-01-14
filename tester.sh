#!/bin/bash
 
g++ $1.cpp -o $1
g++ $2.cpp -o $2 
g++ $3.cpp -o $3

flag=true

for i in {1..1000}
do
    echo "$i"
 
	./$1 > input.txt
	./$2 < input.txt > output.txt
	./$3 < input.txt > output2.txt
 
 
	diff output.txt output2.txt > diff.txt
 
	myVar=($(wc -w ./diff.txt))
	if [ $myVar -gt 0 ] ; then
		echo "Wrong on test: $i"
		flag=false
        break
	fi
done

if [ "$flag" = true ] ; then
	echo "All cases passed"
fi