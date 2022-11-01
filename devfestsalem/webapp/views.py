from django.shortcuts import render,redirect
from .models import *
import datetime
from django.contrib import messages
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


# Create your views here.

def index(request):
	return render(request,"index.html",locals())