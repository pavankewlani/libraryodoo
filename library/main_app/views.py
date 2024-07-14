from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from main_app.forms import LoginForm, Usersignupform
from main_app.models import BookTable, User
from django.contrib.auth.decorators import login_required


# Create your views here.
def home_page(request):

    user = request.user
    print(user)
    context = {"user": user}
    return render(request, "home.html", context)


def login_page(request):
    context = {}
    form = LoginForm

    # if request.user.is_authenticated:
    #    return redirect("login_page")

    if request.method == "POST":

        data = request.POST

        username = data.get("username")
        password = data.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect("home_page")

        else:
            print("error")

    context["form"] = form
    return render(request, "login.html", context)


def logout_page(request):
    logout(request)
    return redirect("home_page")


@login_required
def user_profile(request):
    user = request.user
    print(user)

    data = User.objects.filter(username=user)
    context = {}

    context["data"] = data.last()

    return render(request, "userprofile.html", context)


def signup_page(request):

    context = {}
    form = Usersignupform()

    if request.method == "POST":

        form = Usersignupform(request.POST)
        if form.is_valid():
            form.save()
            user = form.instance
            user.set_password(request.POST.get("password"))
            user.save()
            return redirect("login_page")
        else:
            print("error")
    else:
        print("Error")
    context["form"] = form

    return render(request, "signup.html", context)


def category_view(request, category):
    context = {}
    categories = [i[0] for i in BookTable.choices]
    if category not in categories:
        return redirect("404")

    product_details = BookTable.objects.filter(category=category)
    context["product_details"] = product_details

    return render(request, "selfhelp.html", context)


def product_view(request, category, pi):
    context = {}

    categories = [i[0] for i in BookTable.choices]
    if category not in categories:
        return redirect("404")

    product = BookTable.objects.filter(category=category, id=pi).last()
    context["product"] = product

    return render(request, "selfhelp1.html", context)
