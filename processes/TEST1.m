clc;clear all
%input dimensions
N = 241; M = 181;

fid1 = fopen('./output/HsCA.txt');

H = fscanf(fid1,'%f',[N M]); % xc+1 and yc+1
AA = find(H<0.01);
H(AA) = NaN;
    
%convert from m to ft. 
H = H.*3.28084;    

figure
sizefig(500,500)
chart=pcolor(H')
set(chart,'edgecolor','flat')
axis equal
axis off
 
%create colormap
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

color2 = [blue',green',red']


for i = 1:150
    color(i,:) = color2(i+20,:);
end
 
colormap(color)

clim([0 15])

set(gca,'position',[0 0 1 1] ,'units','normalized')