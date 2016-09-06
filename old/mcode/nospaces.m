function out = nospaces(s)
    i=1;
    while isspace(s(i))==0
        out(i) = s(i);
        i=i+1;
    end 