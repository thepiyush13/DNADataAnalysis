#!/usr/bin/env python
import sys
import string
import os
if __name__ == "__main__" :
	dirname  = sys.argv[1]
	for filename in os.listdir(dirname):
		print filename

