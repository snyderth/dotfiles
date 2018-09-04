#terminate running bars
killall -q polybar

#wait until the processes have shut down
while pgrep -u $UID -x polybar>/dev/null; do sleep 1; done

#launch bars
polybar base &
