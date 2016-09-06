%plot nested grids CA
%Scott Hayward

clc; clear all; close all;
fclose all

fname=['SB';'LA';'OC';'SD'];
fdimsX=[601, 401, 401, 301];
fdimsY=[301, 301, 201, 401];

%colormap creation 

 a=linspace(pi/80,pi/2,40);
 b=linspace(pi/2+pi/80,pi,40);
 c=linspace(pi+pi/80,3*pi/2,40);
 d=linspace(3*pi/2+pi/80,2*pi,40);
 LB=zeros(1,40);
 B=zeros(1,5);
 T=ones(1,5);
 
 
 uT=.5+.5*sin(a);
 dT=.5+.5*sin(b);
 dB=.5+.5*sin(c);
 uB=.5+.5*sin(d);
 
 red=[uT,T,dT,dB,B,uB,uT];
 green=[B,uB,uT,T,dT,dB,LB];
 blue=[LB,B,uB,uT,T,dT,dB];

 

 color2=[blue',green',red'];
 
 
 for i=1:150
     color(i,:)=color2(i+20,:);
 end
 
 %process, print and break up all data. 

 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%change to 1:4 for final
for i=1:4

N=fdimsX(i);
M=fdimsY(i);
H=zeros(N,M);    

name=['./output/Hs',fname(i,:),'.txt'];

    
fid1=fopen(name);
H1=fscanf(fid1,'%f'); % xc+1 and yc+1  


H=zeros(N,M);
    for ii=1:1:length(H1)
          H(ii)=H1(ii);
    end
  
    H1=fscanf(fid1,'%f'); % xc+1 and yc+1  
    
     AA=find(H<0.01);
    H(AA)=NaN;

H=H.*3.28084;    

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 figure

 
 img=pcolor(H');
 
 set(img,'edgecolor','flat')
set(gca,'position',[0 0 1 1] ,'units','normalized')


 colormap(color)
 sizefig(fdimsX(i),fdimsY(i))
axis off
 
clim([0 15])
     
%this muct be changed based on computer
imgname=['./output/imgs/','Hs',fname(i,:),'.png'];
   
%print(imgname)

end


