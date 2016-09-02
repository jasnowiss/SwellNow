%re-combine nested grids
%Scott Hayward

clc; clear all; close all;
fclose all

<<<<<<< HEAD
fname=['SB';'LA';'OC';'SD'];
fdimsX=[601, 401, 401, 301];
fdimsY=[301, 301, 201, 401];
numdivY=[6, 4, 4, 3];
numdivX=[3, 3, 2, 4];

%resolution of computational grids
resolution=1/400;


%length of each broken up section...
len=1/resolution/4;
lenarray=[1:1:len];
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
 %create colormap
=======
fname = ['SB';'LA';'OC';'SD'];
fdimsX = [601, 401, 401, 301];
fdimsY = [301, 301, 201, 401];
numdivY = [6, 4, 4, 3];
numdivX = [3, 3, 2, 4];

%resolution of computational grids
resolution = 1/400;

%length of each broken up section...
len = 1/resolution/4;
lenarray = [1:1:len];

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
%create colormap
>>>>>>> 9ad2df4ffdac774badea806d183760ff699f22e8
%  
%  a=linspace(pi/10,pi/2,10);
%  b=linspace(pi/2+pi/10,pi,10);
%  c=linspace(pi+pi/10,3*pi/2,10);
%  d=linspace(3*pi/2+pi/10,2*pi,10);
%  e=ones(1,2);
%  f=ones(1,1);
% 
%  
%  uT=.5+.5*sin(a);
%  dT=.5+.5*sin(b);
%  dB=.5+.5*sin(c);
%  uB=.5+.5*sin(d);
%  
%  red=[uT,1*e,dT,dB,uB,f*.5];
%  green=[uB,uT,1*e,dT,dB,0*f];
%  blue=[0*e,0*e,0*e,0*e,0*e,uB,uT,1*e,dT,f*.5];

<<<<<<< HEAD
 
%colormap creation 

 a=linspace(pi/80,pi/2,40);
 b=linspace(pi/2+pi/80,pi,40);
 c=linspace(pi+pi/80,3*pi/2,40);
 d=linspace(3*pi/2+pi/80,2*pi,40);
 LB=zeros(1,40)
 B=zeros(1,5);
 T=ones(1,5)
 
 
 uT=.5+.5*sin(a);
 dT=.5+.5*sin(b);
 dB=.5+.5*sin(c);
 uB=.5+.5*sin(d);
 
 red=[uT,T,dT,dB,B,uB,uT];
 green=[B,uB,uT,T,dT,dB,LB];
 blue=[LB,B,uB,uT,T,dT,dB];

 

 color2=[blue',green',red']
 
 
 for i=1:150
     color(i,:)=color2(i+20,:);
 end
 
 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 



 
 

%process, print and break up all data. 

 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%change to 1:4 for final
for i=1:1

    
name=['./output/Hs',fname(i,:),'.txt'];

    
fid1=fopen(name);


    H1=fscanf(fid1,'%f'); % xc+1 and yc+1
    
    count=1;
    H=zeros(fdimsX(i),fdimsY(i));
    for iii=1:1:length(H1)
        H(iii)=H1(iii);
    end
    
     AA=find(H<0.01);
    H(AA)=NaN;
   
   %convert from m to ft. 

H=H'.*3.28084;    

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%seperate grids into subsections

for xn=1:numdivX(i)
    
    for yn=1:numdivY(i)
      
        
        X=[((xn-1)*len)+1:1:xn*len];
        Y=[((yn-1)*len)+1:1:yn*len];

        

        for xi=1:1:len

            for yi=1:1:len
           
                chart(xi,yi)=H(X(xi),Y(yi));
                
            end
       
        end
        
 figure

 
 img=pcolor(chart);
 
 set(img,'edgecolor','flat')
set(gca,'position',[0 0 1 1] ,'units','normalized')


 colormap(color)
  sizefig(500,500)
axis off
 
clim([0 15])
     
%this muct be changed based on computer
imgname=['./output/imgs/','Hs',fname(i,:),num2str(xn),num2str(yn),'.png'];
   
print(imgname)

        
    end
    
end



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


end
=======
%colormap creation 

a = linspace(pi/80,pi/2,40);
b = linspace(pi/2+pi/80,pi,40);
c = linspace(pi+pi/80,3*pi/2,40);
d = linspace(3*pi/2+pi/80,2*pi,40);
LB = zeros(1,40);
B = zeros(1,5);
T = ones(1,5);
 
uT = .5+.5*sin(a);
dT = .5+.5*sin(b);
dB = .5+.5*sin(c);
uB = .5+.5*sin(d);
 
red = [uT,T,dT,dB,B,uB,uT];
green = [B,uB,uT,T,dT,dB,LB];
blue = [LB,B,uB,uT,T,dT,dB];

color2 = [blue',green',red'];
 
for i = 1:150
    color(i,:) = color2(i+20,:);
end

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

%process, print and break up all data. 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%change to 1:4 for final
for i = 1:1  
    name = ['./output/Hs',fname(i,:),'.txt'];   
    fid1 = fopen(name);

    H = fscanf(fid1,'%f',[fdimsX(i) fdimsY(i)]); % xc+1 and yc+1
    AA = find(H<0.01);
    H(AA) = NaN;
   
    %convert from m to ft. 

    H = H'.*3.28084;    

    %seperate grids into subsections

    for xn = 1:numdivX(i)
        for yn = 1:numdivY(i) 
            X = [((xn-1)*len)+1:1:xn*len];
            Y = [((yn-1)*len)+1:1:yn*len];
            for xi = 1:1:len
                for yi = 1:1:len
                    chart(xi,yi) = H(X(xi),Y(yi));
                end
            end
            figure
            img = pcolor(chart);
            set(img,'edgecolor','flat')
            set(gca,'position',[0 0 1 1] ,'units','normalized')
            
            colormap(color)
            sizefig(500,500)
            axis off
 
            clim([0 15])
     
            %this muct be changed based on computer
            imgname = ['./output/imgs/','Hs',fname(i,:),num2str(xn),num2str(yn),'.png'];
   
            print(imgname)      
        end
    end
end
>>>>>>> 9ad2df4ffdac774badea806d183760ff699f22e8
