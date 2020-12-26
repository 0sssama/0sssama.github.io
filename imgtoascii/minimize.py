line1 = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009]
line2 = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009]
line3 = [3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009]
line4 = [4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009]
line5 = [5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 4009]
line6 = [6001, 6002, 6003, 6004, 6005, 6006, 6007, 6008, 6009]
pixelLines = []
[pixelLines.append(a) for a in [line1, line2, line3, line4, line5, line6]]


finalLine = []
tempLine = []
p = 0
j=0


while j < len(line1)//3:
    for i in pixelLines:
        for ind in range(p, p+3):
            tempLine.append(i[ind])
    p+=3
    finalLine.append(tempLine) # add sum(tempLine/9)
    tempLine = []
    j+=1
    
    

print(finalLine)