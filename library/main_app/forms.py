from django import forms

from main_app.models import User


class Usersignupform(forms.ModelForm):
    password = forms.CharField(widget=forms.TextInput(attrs={"type": "password"}))
    firstname = forms.CharField(max_length=255)
    lastname = forms.CharField(max_length=255)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for visible in self.visible_fields():
            visible.field.widget.attrs["class"] = "form-control"

    class Meta:
        model = User
        fields = [
            "firstname",
            "lastname",
            "email",
            "username",
            "password",
        ]


class LoginForm(forms.ModelForm):

    password = forms.CharField(widget=forms.TextInput(attrs={"type": "password"}))

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for visible in self.visible_fields():
            visible.field.widget.attrs["class"] = "form-control"

    class Meta:
        model = User
        fields = ["username", "password"]
