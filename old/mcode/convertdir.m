function out = convertdir(s)
    if (strcmp(s,'N')==1) 
        out=0;    
    elseif (strcmp(s,'NNE')==1) 
        out=1*22.5;
    elseif (strcmp(s,'NE')==1) 
        out=2*22.5;
    elseif (strcmp(s,'ENE')==1) 
        out=3*22.5;
    elseif (strcmp(s,'E')==1) 
        out=4*22.5;   
    elseif (strcmp(s,'ESE')==1) 
        out=5*22.5;
    elseif (strcmp(s,'SE')==1) 
        out=6*22.5;
    elseif (strcmp(s,'SSE')==1) 
        out=7*22.5;
    elseif (strcmp(s,'S')==1) 
        out=8*22.5;    
    elseif (strcmp(s,'SSW')==1) 
        out=9*22.5;
    elseif (strcmp(s,'SW')==1) 
        out=10*22.5;
    elseif (strcmp(s,'WSW')==1) 
        out=11*22.5;
    elseif (strcmp(s,'W')==1) 
        out=12*22.5;
    elseif (strcmp(s,'WNW')==1) 
        out=13*22.5;
    elseif (strcmp(s,'NW')==1) 
        out=14*22.5;
    elseif (strcmp(s,'NNW')==1) 
        out=15*22.5;
    else
        out=1.0;
    end