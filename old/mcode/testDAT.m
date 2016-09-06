
 %create colormap
 
 a=linspace(pi/10,pi/2,10)
 b=linspace(pi/2+pi/10,pi,10)
 c=linspace(pi+pi/10,3*pi/2,10)
 d=linspace(3*pi/2+pi/10,2*pi,10)
 e=ones(1,10);
 f=ones(1,1);

 
 uT=.5+.5*sin(a);
 dT=.5+.5*sin(b);
 dB=.5+.5*sin(c);
 uB=.5+.5*sin(d);
 
 blue=[uT,1*e,dT,dB,uB,f*.5];
 green=[uB,uT,1*e,dT,dB,0*f];
 red=[0*e,uB,uT,1*e,dT,f*.5];

 
 color=[red',green',blue'];
 


fid1=fopen('sampleDAT.txt');

fgetline(fid1)
fgetline(fid1)

date(:)=str2num(fgetline(fid1));


for i=1:46
    
    data(i,:)=str2num(fgetline(fid1));

end

for i=1:25
    
    x(i,:)=data(i+4,:);

end


figure(1)
per=1./x(:,1);
plot(per,x(:,3))


%create directional wave spectrum
%replace missing data 
del=find(x==999.0000);
x(del)=0;

%seperate variables 
C11=x(:,3);
A=150:1:360;
R1=x(:,4);
R2=x(:,5);
ALPHA1=x(:,6);
ALPHA2=x(:,7);






%improve resolution with linear interpolation










%initialize spectrum variable
D=zeros(25,210);


for f=1:1:length(C11)
    for a=1:1:210
    
        %solve for D(f,A)
   D(f,a)=C11(f)/pi*(.5+R1(f)*cosd(A(a)-ALPHA1(f))+R2(f)*cosd(2*(A(a)-ALPHA2(f))));

        
    end
end


figure(2)
A=1:1:210;
dir=pcolor(A+150,1./x(:,1),abs(D))
set(dir,'edgecolor','flat')

colormap(color)


figure(3)

%create polar plot
r=length(x);
th=180;

Rad = (6:30)'/r;
Theta = pi*(151:360)/th;
X = Rad*cos(pi/2-Theta);
Y = Rad*sin(pi/2-Theta);
C = Rad*cos(2*Theta);


%trim excess frequencies



spectrum=surf(X,Y,abs(D))
axis equal
colormap(color)

 set(spectrum,'edgecolor','flat')


 