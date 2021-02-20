package com.example.timber.ui.dashboard;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;

import com.example.timber.R;
import com.example.timber.model.ProfileData;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import com.example.timber.ui.profile.ProfileViewFragment;

public class DashboardFragment extends Fragment {

    private DashboardViewModel dashboardViewModel; // unused

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        dashboardViewModel = new ViewModelProvider(this).get(DashboardViewModel.class);
        View root = inflater.inflate(R.layout.fragment_dashboard, container, false);

        // DEBUG populate a profile when we press this button
        // TODO replace with something that retrieves profile data
        final FloatingActionButton popProfile = root.findViewById(R.id.debugPopulateProfileButton);
        popProfile.setOnClickListener(v -> insertProfileViewFragment(new ProfileData("Bobby McFly", "Hi I'm a dude who likes to hike.\nx\nx\nx\nx\nx\nx\nx\nx\nx\nx\nx\nx\nx\nmore text for scrolling\nx\nx\nx\nx\nx\nx\nx\nx\nx\nxhello")));

        return root;
    }

    private void insertProfileViewFragment(ProfileData profileData) {
        Fragment frag = new ProfileViewFragment(profileData);
        getChildFragmentManager().beginTransaction()
                .replace(R.id.child_fragment_container, frag)
                .commit();
    }

}