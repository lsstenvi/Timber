package com.example.timber.ui.profile;

import androidx.annotation.NonNull;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;
import androidx.lifecycle.ViewModelProvider;

import com.example.timber.model.ProfileData;

public class ProfileViewModel extends ViewModel {

    private final MutableLiveData<String> mDisplayName;
    private final MutableLiveData<String> mDescription;

    public ProfileViewModel(ProfileData profileData) {
        assert profileData != null;
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

    public static class Factory implements ViewModelProvider.Factory {
        private ProfileData profileData;

        public Factory(ProfileData profileData) {
            this.profileData = profileData;
        }

        @NonNull
        @Override
        public <T extends ViewModel> T create(@NonNull Class<T> modelClass) {
            return (T) new ProfileViewModel(profileData);
        }
    }

}
