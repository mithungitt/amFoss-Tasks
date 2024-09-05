import platform
import subprocess

if platform.system() == "Linux":
    p = subprocess.Popen([".linuxDist/dist/Chest1/Chest"])
    p.wait()
if platform.system() == "Darwin":
    p = subprocess.Popen([".macDist/dist/Chest1/Chest"])
    p.wait()
elif platform.system() == "Windows":
    print("What are yo doing on windows?")
