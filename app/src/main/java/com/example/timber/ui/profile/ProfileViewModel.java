package com.example.timber.ui.profile;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.example.timber.model.ProfileData;

public class ProfileViewModel extends ViewModel {

    private final MutableLiveData<String> mDisplayName;
    private final MutableLiveData<String> mDescription;

    public ProfileViewModel(ProfileData profileData) {
        mDisplayName = new MutableLiveData<>();
        mDisplayName.setValue(profileData.getName());
        mDescription = new MutableLiveData<>();
        mDescription.setValue(profileData.getDescription());
    }

    public LiveData<String> getDisplayName() {
        return mDisplayName;
    }

    public LiveData<String> getDescription() {
        return mDescription;
    }

}
