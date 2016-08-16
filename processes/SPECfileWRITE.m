clc;clear all;close all; fclose all

[date, bw, E, f]=specsum('./inputs/DATA_spec.txt');
[date, bw, A1, f]=specsum('./inputs/DATA_dir1.txt');
[date, bw, A2, f]=specsum('./inputs/DATA_dir2.txt');
[date, bw, R1, f]=specsum('./inputs/DATA_r1.txt');
[date, bw, R2, f]=specsum('./inputs/DATA_r2.txt');


%convert direction
Dir=-1*((A1(1,:)+A2(1,:))./2)+270;
    
%openfile in SWAN directory

fid=fopen('./inputs/specfiletemplate.txt','r');

for i=1:1:43
 
    header{i}=fgetline(fid);
    
end

%create enter symbol to clear new line
rt=header{43};

fid2=fopen('./inputs/specSWANfile.txt','w');

for i=1:1:42
 
    fwrite(fid2,header{i},'char');
    
end

fwrite(fid2, ['LOCATION 1'],'char');
fwrite(fid2, [rt],'char');

for i=1:1:25
    Energy=num2str(E(1,i));
    NDIR=num2str(Dir(i));
    DSPR=num2str(abs(180/pi*(R1(1,i)-R2(1,i))));
    fwrite(fid2, [Energy,' ',NDIR,' ',DSPR, rt],'char');
    
end

    fclose all
    