function [date, bw, Dat, f] = specsum(fname);
    
%bw=bandwidth
%Dat=data from file of interest... could be Energy, A1, R1, etc. 
%f=frequency
    
fid=fopen(fname);
fgetline(fid);

% starts at Hour zero (AKA... now)
% 
%%%change later to incorporate 24 hours...
for t=1:1:2
    
H(t,:)=str2num(fgetline(fid));


%[year, month, day, hour, minute]
date=H(t,1:5);


%DATA_spec file is different, shift is equal to 6 in that instance. otherwise, it is 5. 
shift=1;
if H(1,6)==9.999
shift=0;
end


%only choosing 25 bands for now, can change to 46 later...
skip=5;
for i=1:1:25
    
    
    %this might look rather complicated, but it simply fills in the wave info for each location
    Dat(t,i)=H(t,2*(i+skip)+5-shift);
    f(i)=H(t,2*(i+skip)+6-shift);
    bw(i)=H(t,2*(i+skip+1)+6-shift)-H(t,2*(i+skip)+6-shift);
    
end

end