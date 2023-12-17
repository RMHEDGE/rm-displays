# set local time
sudo timedatectl set-timezone Australia/Melbourne

sudo dpkg-reconfigure tzdata

sudo service cron restart

# turn display off at 6pm
0 18 * * * xset -display :0.0 dpms force off

# and reboot at 8am
0 8 * * * systemctl reboot
