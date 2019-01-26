# BreakMasher  

BreakMasher is a slicer/sampler built with JavaScript. It can handle drum loops that have been chopped into up to 16 pieces. Each 16th step of this loop is then played in a sequence, and the user has the option to manipulate the playback, BPM and pitch in real time. Please see the **how to** below for full instructions!

## Status  

The project is pretty much finished. Improvements will be added soon, such as smoother playback, instant loading of samples (to create more complex combinations), and a current play-position marker. 

## Live Demo 

Click the link below for a working demo: 

[https://default-la.github.io/masher/](https://default-la.github.io/masher/)

## How to use 

**Play / Stop** - Plays and stops the loop  
  
**BPM Down / Up** - use the `Q` and `W` keyboard keys to change the BPM of the loop.  
   
**Base Pitch DOWN / UP - use the `O` and `P` keyboard keys to change the pitch of the loop.  

**Freeze Buttons** - These buttons *freeze* the loop, and repeats the last sound chunk that was played until the key is released. These keys can also be combined to achieve other repeated time-signatures. 

`A` - 4/4 repeat  
`S` - 8/4 repeat  
`D` - 16/4 repeat
`F` - 32/4 repeat
`G` - 6/4(?) repeat  

**Pitch Buttons** - These buttons are to be used with the freeze buttons simultaneously. For example, if you are holding the `S` key, you can then press `J`, `K`, or `L` to change the pitch of the current sound being repeated.

`J` - pitch down  
`K` - pitch up  
`L` - unknown / buggy feature (*produces some weird and wonderful results*)  


**Load Loops** - There are currently four loops to choose from. These can be loaded by pressing the `Z`, `X`, `C`, or `V` keyboard keys. The sound will be applies on the next loop iteration. 
More sounds will be added in the future, and these buttons will be replaced with an option menu.

## Bugs

The code is relatively bug free at the moment. There are loads of areas to be improved, although, strange sound results can be achieved due to the lack of these improvements, so maybe we can call them "hidden features" at the moment.
