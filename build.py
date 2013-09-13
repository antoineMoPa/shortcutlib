#!/usr/bin/python
import sys

filenames = []

filenames.append('shortcutLib.js')
filenames.append('dom.js')
filenames.append('ajax.js')

with open('q.js', 'w') as outfile:
	for fname in filenames:
		try:
			print("Including '"+fname+"' ")
			with open(fname) as infile:
				outfile.write(infile.read())
		except IOError:
			print("Problem encountered while reading/writing '"+fname+"'")
