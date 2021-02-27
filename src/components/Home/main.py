​​
encode s to output file;

while (not end of input stream) {
    C = next input character;
    if (P + C is in the string table) {
        P = P + C
    }
    else {
        output the code for P
    }

    add P + C to the string table
    P = C
}
output code for P