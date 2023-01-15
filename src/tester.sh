#!/bin/bash

pwd

touch generator.cpp | cat $1 > generator.cpp
touch main.cpp | cat $2 > main.cpp
touch brute.cpp | cat $3 > brute.cpp
touch ans.txt

g++ $generator.cpp -o $generator
g++ $main.cpp -o $main 
g++ $brute.cpp -o $brute

flag=true

for i in {1..10}
do
    echo "$i" 
 
	./generator > input.txt
	./main < input.txt > output.txt
	./brute < input.txt > output2.txt
 
	diff output.txt output2.txt > diff.txt
 
	myVar=($(wc -w ./diff.txt))
	if [ $myVar -gt 0 ] ; then
		"Wrong on test: $i" > ans
		flag=false
        break
	fi
done

if [ "$flag" = true ] ; then
	"All cases passed" > ans
fi