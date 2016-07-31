% make sure everything is closed before running
clc;clear all;close all;
fclose all

% add buoy location for tanner bank AND north buoy
fid2 = fopen('buoydat.txt');
 
% Hs (sig wave height), H1 (comp 1 wave height), T1 (comp 1 period), D1 (comp 1 direction), H2, T2, D2
x = fgetline(fid2);
Hs = nospaces(x);
Hs = 0.3048*str2num(Hs);
Hs = num2str(Hs);
      
x = fgetline(fid2);
H1 = nospaces(x);
H1 = 0.3048*str2num(H1);
H1 = num2str(H1);
      
x = fgetline(fid2);
T1 = nospaces(x);
      
x = fgetline(fid2);
D1 = nospaces(x);
    
x = fgetline(fid2);
H2 = nospaces(x);
H2 = 0.3048*str2num(H2);
H2 = num2str(H2);
      
x = fgetline(fid2);
T2 = nospaces(x);

x = fgetline(fid2);
D2 = nospaces(x);

D1 = convertdir(D1);
D2 = convertdir(D2);

D1 = -1*D1+90;
D2 = -1*D2+90;

% open and read lines from CA.swn
fid3=fopen('CA.swn');

line1=fgetline(fid3);
line2=fgetline(fid3); 
line3=fgetline(fid3);
line4=fgetline(fid3);
line5=fgetline(fid3);
line6=fgetline(fid3);
line7=fgetline(fid3);
line8=fgetline(fid3);
line9=fgetline(fid3);
line10=fgetline(fid3);
line11=fgetline(fid3);
line12=fgetline(fid3);
line13=fgetline(fid3);
line14=fgetline(fid3);
line15=fgetline(fid3);
line16=fgetline(fid3);
line17=fgetline(fid3);
line18=fgetline(fid3);
line19=fgetline(fid3);
line20=fgetline(fid3);
line21=fgetline(fid3);
line22=fgetline(fid3);
line23=fgetline(fid3);
line24=fgetline(fid3);
line25=fgetline(fid3);
line26=fgetline(fid3);

en=line25(length(line25));
fclose all

% edit specific lines from CA.swn
line7=['BOU SIDE S CCW CON PAR ',H1, ' ' ,T1, ' ' ,num2str(D1),' ',en];
line8=['BOU SIDE w CCW CON PAR ',H1, ' ' ,T1, ' ' ,num2str(D1),en];
line9=['BOU SIDE S CCW CON PAR ',H2, ' ' ,T1, ' ' ,num2str(D2),en];
line10=['BOU SIDE w CCW CON PAR ',H2, ' ' ,T1, ' ' ,num2str(D2),en];

% reopen and overwrite CA.swn with the updated info
test=fopen('CA.swn','w');

fwrite(test,line1,'char');
fwrite(test,line2,'char');
fwrite(test,line3,'char');
fwrite(test,line4,'char');
fwrite(test,line5,'char');
fwrite(test,line6,'char');
fwrite(test,line7,'char');
fwrite(test,line8,'char');
fwrite(test,line9,'char');
fwrite(test,line10,'char');
fwrite(test,line11,'char');
fwrite(test,line12,'char');
fwrite(test,line13,'char');
fwrite(test,line14,'char');
fwrite(test,line15,'char');
fwrite(test,line16,'char');
fwrite(test,line17,'char');
fwrite(test,line18,'char');
fwrite(test,line19,'char');
fwrite(test,line20,'char');
fwrite(test,line21,'char');
fwrite(test,line22,'char');
fwrite(test,line23,'char');
fwrite(test,line24,'char');
fwrite(test,line25,'char');
fwrite(test,line26,'char');

fclose all